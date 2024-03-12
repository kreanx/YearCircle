export interface IcircleData {
    degree: number,
    count: number,
    description: string,
    position: {
        top: number,
        left: number
    }
}

export const circleData: IcircleData[] = [
    {
        degree: 0,
        count: 1,
        description: 'Технологии',
        position: {
            top: 0,
            left: 394,
        }
    },
    {
        degree: -60,
        count: 2,
        description: 'Интернет',
        position: {
            top: 231,
            left: 532,
        },
    },
    {
        degree: -120,
        count: 3,
        description: 'Социальные сети',
        position: {
            top: 458,
            left: 399,

        },
    },
    {
        degree: -180,
        count: 4,
        description: 'Мобильные устройства',
        position: {
            top: 455,
            left: 123,
        },
    },
    {
        degree: -240,
        count: 5,
        description: 'Искусственный интеллект',
        position: {
            top: 231,
            left: 0,
        },
    },
    {
        degree: -300,
        count: 6,
        description: 'Криптовалюты и блокчейн',
        position: {
            top: 0,
            left: 135,
        },
    },
];
