const mockData = [
    {
        id: 1,
        name: 'test1',
        description: 'test1 description',
        price: 1.99,
    },
    {
        id: 2,
        name: 'test2',
        description: 'test2 description',
        price: 2.99,
    },
    {
        id: 3,
        name: 'test3',
        description: 'test3 description',
        price: 3.99,
    },
];


const testService = {
    async getTests() {
        if (mockData.length == 0) {
            return {
                status: 'failed',
                code: 404,
                message: 'No tests found',
                data: {},
            };
        }
        return {
            status: 'success',
            code: 200,
            message: 'Tests found',
            data: mockData,
        };
    },
    async getTestById(id) {
        const test = mockData.find(test => test.id === id);
        if (test) {
            return {
                status: 'success',
                code: 200,
                message: 'Test with id ' + id + ' found',
                data: test,
            };
        }
        return {
            status: 'failed',
            code: 404,
            message: 'Test with id ' + id + ' not found',
            data: {},
        };
    }
};

module.exports = testService;
