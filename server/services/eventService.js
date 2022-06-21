const mockData = [
    {
        id: 1,
        name: 'event1',
        dateStart: '',
        dateFinish: '', 
        location: 'Utal',
        description: 'event1 description',
    },
    {
        id: 2,
        name: 'event2',
        dateStart: '',
        dateFinish: '', 
        location: 'UCM',
        description: 'event2 description',
    },
    {
        id: 3,
        name: 'event3',
        dateStart: '',
        dateFinish: '', 
        location: 'UA',
        description: 'event3 description',
    },
];

const eventService = {
    async getEvent() {
        if (mockData.length == 0) {
            return {
                status: 'failed',
                code: 404,
                message: 'No event found',
                data: {},
            };
        }
        return {
            status: 'success',
            code: 200,
            message: 'Event found',
            data: mockData,
        };
    },
};

module.exports = eventService;
