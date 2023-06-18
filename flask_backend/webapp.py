# import argparse
# import io
# import os
# from PIL import Image


# import torch
# from flask import Flask, render_template, request, redirect, jsonify
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# @app.route("/", methods=["GET", "POST"])
# def predict():
#     if request.method == "POST":
#         file = request.files["file"]

#         img_bytes = file.read()
#         img = Image.open(io.BytesIO(img_bytes))
#         results = model([img])

#         results.render()  # updates results.imgs with boxes and labels
#         results.save(save_dir="static/")
#         data = results.pandas().xyxy[0].to_json(orient="records")
#         for item in data:
#             for value in item.values():
#                 print(value)

#         return redirect("/")

#     return render_template("index.html")


# @app.route('/process_image', methods=['POST'])
# def process_image():
#     if 'image' not in request.files:
#         return jsonify({'error': 'No image file provided'})

#     image_file = request.files['image']
#     print(image_file)
#     # Process the image and generate the JSON result
#     result = {'result': 'prowal', 'message': 'Image processed successfully'}

#     return jsonify(result)

# if __name__ == "__main__":
#     parser = argparse.ArgumentParser(description="Flask app exposing yolov5 models")
#     parser.add_argument("--port", default=5000, type=int, help="port number")
#     args = parser.parse_args()

#     model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)  # force_reload = recache latest code
#     model.eval()
#     app.run(host="0.0.0.0", port=args.port)
import argparse
import io
import os
from PIL import Image

import torch
from flask import Flask, render_template, request, redirect, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# @app.route("/", methods=["GET", "POST"])
# def predict():
#     if request.method == "POST":
#         if "file" not in request.files:
#             return redirect(request.url)
#         file = request.files["file"]
#         if not file:
#             return

#         img_bytes = file.read()
#         img = Image.open(io.BytesIO(img_bytes))
#         results = model([img])

#         results.render()  # updates results.imgs with boxes and labels
#         results.save(save_dir="static/")
#         data = results.pandas().xyxy[0].to_json(orient="records")
#         print(data)
#         return redirect("/")

#     return render_template("index.html")


@app.route('/process_image', methods=['POST'])
def process_image():
    if 'image' not in request.files:
        
        return jsonify({'error': 'No image file provided'})

    image_file = request.files['image']
    print(image_file)
    # Process the image and generate the JSON result
    img_bytes = image_file.read()
    img = Image.open(io.BytesIO(img_bytes))
    results = model([img])
    data = results.pandas().xyxy[0].to_json(orient="records")
    result = {'result': 'prowal', 'message': 'Image processed successfully'}
    return data
    return jsonify(result)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Flask app exposing yolov5 models")
    parser.add_argument("--port", default=5000, type=int, help="port number")
    args = parser.parse_args()

    model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)  # force_reload = recache latest code
    model.eval()
    app.run(host="0.0.0.0", port=args.port)