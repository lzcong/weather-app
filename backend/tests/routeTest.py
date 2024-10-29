import unittest
from unittest.mock import patch
from src.route import get_weather_data

class TestGetWeatherData(unittest.TestCase):

    @patch('services.qweather_service.get_now_weather_data')
    def test_get_weather_data_success(self, mock_get_now_weather_data):
        # 模拟成功获取天气数据
        mock_get_now_weather_data.return_value = {'weather': '晴天'}

        city = '北京'
        response = get_weather_data(city)

        # 断言响应状态码为 200
        self.assertEqual(response.status_code, 200)

        # 断言响应数据与模拟数据一致
        self.assertEqual(response.json(), {'weather': '晴天'})

    @patch('services.qweather_service.get_now_weather_data')
    def test_get_weather_data_missing_city(self, mock_get_now_weather_data):
        # 模拟城市参数缺失
        city = None

        response = get_weather_data(city)

        # 断言响应状态码为 400
        self.assertEqual(response.status_code, 400)

        # 断言响应错误消息与预期一致
        self.assertEqual(response.json(), {'error': 'City parameter is missing'})

if __name__ == '__main__':
    unittest.main()
