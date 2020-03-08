export async function query(form) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(MOCK_RESULT)
        }, 2000)
    })

    // return new Promise((resolve, reject) => {
    //     $.getJSON('http://www.baidu.com/index.php?tn=myie2dg&ch=5', {}, function (data) {
    //         console.log(data)
    //         resolve(data)
    //     })
    // })
}

const MOCK_RESULT = {
    'code': 0,
    'message': '成功',
    'data': {
        xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        normal: [120, 132, 101, 134, 90, 230, 210],
        abnormal: [220, 182, 191, 234, 290, 330, 310]
    }
}
