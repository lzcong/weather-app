from flask import Flask
from route import weather_route
from utils import swaggerui_blueprint, SWAGGER_URL

app = Flask(__name__)
app.register_blueprint(weather_route)
app.register_blueprint(swaggerui_blueprint, url_prefix=SWAGGER_URL)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000, debug=True)