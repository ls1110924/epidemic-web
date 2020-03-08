import axios from 'axios';

// 创建axios实例
const httpService = axios.create({
	// baseURL: 'http://localhost:8080',
	// 请求超时时间
	timeout: 10000
});

// request拦截器
httpService.interceptors.request.use(config => {
	// config.headers['Authorization'] = store.getters.adminer.token_pre + ' ' + store.getters.adminer.token;
	return config;
}, error => {
	return Promise.reject(error);
});

// respone拦截器
httpService.interceptors.response.use(
	response => {
		// 统一处理状态
		const res = response.data;

		if (res.code !== 0) {
			return Promise.reject(res);
		} else {
			return Promise.resolve(res.data);
		}
	},
	// 错误处理
	error => {
		if (error && error.response) {
			const code = parseInt(error.code || (error.response && error.response.status) || -1);

			switch (code) {
				case -1:
					error.message = '网络超时';
					break;
				case 400:
					error.message = '错误请求';
					break;
				case 401:
					error.message = '未授权，请重新登录';
					break;
				case 403:
					error.message = '拒绝访问';
					break;
				case 404:
					error.message = '请求错误,未找到该资源';
					break;
				case 405:
					error.message = '请求方法未允许';
					break;
				case 408:
					error.message = '请求超时';
					break;
				case 500:
					error.message = '服务器端出错';
					break;
				case 501:
					error.message = '网络未实现';
					break;
				case 502:
					error.message = '网络错误';
					break;
				case 503:
					error.message = '服务不可用';
					break;
				case 504:
					error.message = '网络超时';
					break;
				case 505:
					error.message = 'http版本不支持该请求';
					break;
				default:
					error.message = `未知错误${error.response.status}`;
			}
		} else {
			error.message = '连接到服务器失败';
		}

		return Promise.reject(error);
	}
);

export default httpService
