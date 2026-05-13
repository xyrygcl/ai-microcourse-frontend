// Mock 数据
export const mockUser = { username: 'Alice', email: 'alice@example.com' };

export let mockCourses = [
    { id: 1, title: 'TCP基础.pptx', status: '完成', time: '2026-05-12 14:30', thumbnail: '../assets/images/course1.png' },
    { id: 2, title: 'HTTP协议.pptx', status: '处理中', time: '2026-05-13 10:15', thumbnail: '../assets/images/course2.png' }
];

// 模拟登录
export function login(username, password) {
    return new Promise(resolve => setTimeout(() => resolve({ success: true, user: mockUser }), 500));
}

// 模拟获取课程列表
export function getCourses() {
    return new Promise(resolve => setTimeout(() => resolve({ list: mockCourses }), 500));
}

// 模拟上传 PPT
export function uploadPPT(course) {
    return new Promise(resolve => {
        setTimeout(() => {
            mockCourses.unshift(course);
            resolve({ success: true });
        }, 1000);
    });
}