interface Inews {
    year: string,
    description: string,
}

export interface IeventData {
    id: number,
    startYear: string,
    endYear: string,
    articleType: string,
    news: Inews[]
}

export const eventData: IeventData[] = [
    {
        id: 0,
        startYear: '1980',
        endYear: '1986',
        articleType: 'Технологии',
        news: [
            {
                year: '1980',
                description: 'Sinclair Research выпускает домашний компьютер ZX80'
            },
            {
                year: '1982',
                description: 'Появился домашний компьютер ZX...'
            }, {
                year: '1980',
                description: 'Sinclair Research выпускает домашний компьютер ZX80'
            },
            {
                year: '1982',
                description: 'Появился домашний компьютер ZX...'
            }, {
                year: '1980',
                description: 'Sinclair Research выпускает домашний компьютер ZX80'
            },
            {
                year: '1982',
                description: 'Появился домашний компьютер ZX...'
            },
        ]
    },
    {
        id: 1,
        startYear: '1990',
        endYear: '1999',
        articleType: 'Интернет',
        news: [
            {
                year: '1990',
                description: 'Tim Berners-Lee создает первый веб-сервер и браузер'
            },
            {
                year: '1995',
                description: 'Распространение браузера Netscape Navigator'
            }
        ]
    },
    {
        id: 2,
        startYear: '2000',
        endYear: '2010',
        articleType: 'Социальные сети',
        news: [
            {
                year: '2004',
                description: 'Запуск Facebook'
            },
            {
                year: '2006',
                description: 'Запуск Twitter'
            }
        ]
    },
    {
        id: 3,
        startYear: '2010',
        endYear: '2015',
        articleType: 'Мобильные устройства',
        news: [
            {
                year: '2010',
                description: 'Запуск iPad'
            },
            {
                year: '2013',
                description: 'Выход iPhone 5S и iPhone 5C'
            }
        ]
    },
    {
        id: 4,
        startYear: '2016',
        endYear: '2020',
        articleType: 'Искусственный интеллект',
        news: [
            {
                year: '2016',
                description: 'Google DeepMind создает AlphaGo'
            },
            {
                year: '2018',
                description: 'Запуск OpenAI GPT-2'
            }
        ]
    },
    {
        id: 5,
        startYear: '2021',
        endYear: '2023',
        articleType: 'Криптовалюты и блокчейн',
        news: [
            {
                year: '2021',
                description: 'Биткойн достигает исторического максимума в $60,000'
            },
            {
                year: '2022',
                description: 'Появление множества новых криптовалют и NFT-рынка'
            }
        ]
    },
]
