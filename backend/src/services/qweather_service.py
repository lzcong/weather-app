import requests
from config import QWEATHER_KEY, QWEATHER_GEOURL, QWEATHER_URL


def get_city_id(city):
    url = f'{QWEATHER_GEOURL}?location={city}&key={QWEATHER_KEY}&range=cn'
    response = requests.get(url)
    
    # 解析响应数据，获取城市 ID
    data = response.json()
    return data['location'][0]['id']

def get_now_weather_data(city):
    # 获取城市 ID
    city_id = get_city_id(city)
    weather_url = f'{QWEATHER_URL}/now?location={city_id}&key={QWEATHER_KEY}'
    weather_response = requests.get(weather_url)
    weather_data = weather_response.json()
    return weather_data