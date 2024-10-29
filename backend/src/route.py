from flask import jsonify, Blueprint
from services import qweather_service

weather_route = Blueprint('weather_route', __name__)


# 定义路由，处理 /weather/<city> 请求
@weather_route.route('/weather/<city>', methods=['GET'])
def get_weather_data(city):
    if city is None:
        return jsonify({'error': 'City parameter is missing'})
    weather_data = qweather_service.get_now_weather_data(city)
    
    # 返回天气数据
    return jsonify(weather_data)
