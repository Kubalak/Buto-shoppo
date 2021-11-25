class Items {
    static shopItems = [
        {
            key: 0,
            createdBy: 1, 
            uri:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d46ff92d-fdc8-4869-8469-838fbb261881/buty-meskie-air-more-uptempo-KflhC2.png',
            title:"No co to tylko Nike!",
            material: 'Skóra',
            availableSizes: [39,40,41,42,45],
            availableColours: [{key: 1, colour:'#AAAAAA'},{key: 2,  colour: '#BBBBBB'}, {key: 3, colour: '#CCCCCC'}, {key: 4, colour: '#DDDDDD'},{key: 5, colour: '#AAAAAA'}, {key: 6, colour: '#2E00FF'}],
            price: 210.12
        },
        {
            key: 1, 
            createdBy: 1,
            uri:'https://github.com/Kubalak/ATM_Simulator/raw/main/src/main/resources/textures/card_slot_in.png', 
            title:"No odczep się!", 
            material: 'Materiał',
            availableSizes: [39,41,42,43],
            availableColours: [{key: 1, colour:'#AAAAAA'},{key: 2,  colour: '#BBBBBB'}, {key: 3, colour: '#CCCCCC'}, {key: 4, colour: '#DDDDDD'},{key: 5, colour: '#AAAAAA'}, {key: 6, colour: '#2E00FF'}],
            price: 1.2
        },
        {
            key: 2, 
            createdBy: 1,
            uri:'https://github.com/Kubalak/ATM_Simulator/raw/main/src/main/resources/textures/0.png', 
            title:"No co ?!", 
            material: 'Tworzywo sztuczne',
            availableSizes: [40,41,42,43,44],
            availableColours: [{key: 1, colour:'#AAAAAA'},{key: 2,  colour: '#BBBBBB'}, {key: 3, colour: '#CCCCCC'}, {key: 4, colour: '#DDDDDD'},{key: 5, colour: '#AAAAAA'}, {key: 6, colour: '#2E00FF'}],
            price: 1234.3
        },
        {
            key: 3, 
            createdBy: 1,
            uri:'https://github.com/Kubalak/ATM_Simulator/raw/main/src/main/resources/textures/1.png', 
            title:"Test 3", 
            material: 'Materiał',
            availableSizes: [38,39,40,41,42,43],
            availableColours: [{key: 1, colour:'#AAAAAA'},{key: 2,  colour: '#BBBBBB'}, {key: 3, colour: '#CCCCCC'}, {key: 4, colour: '#DDDDDD'},{key: 5, colour: '#AAAAAA'}, {key: 6, colour: '#2E00FF'}],
            price: 345.00
        },
        {
            key: 4, 
            createdBy: 1,
            uri:'https://github.com/Kubalak/ATM_Simulator/raw/main/src/main/resources/textures/2.png', 
            title:"Test 4", 
            material: 'Skóra',
            availableSizes: [41,42,44],
            availableColours: [{key: 1, colour:'#AAAAAA'},{key: 2,  colour: '#BBBBBB'}, {key: 3, colour: '#CCCCCC'}, {key: 4, colour: '#DDDDDD'},{key: 5, colour: '#AAAAAA'}, {key: 6, colour: '#2E00FF'}],
            price: 180.3
        },
        {
            key: 5, 
            createdBy: 1,
            uri:'https://github.com/Kubalak/ATM_Simulator/raw/main/src/main/resources/textures/3.png', 
            title:"Test 5", 
            material: 'Skóra ekologiczna',
            availableSizes: [40,41,42,43],
            availableColours: [{key: 1, colour:'#AAAAAA'},{key: 2,  colour: '#BBBBBB'}, {key: 3, colour: '#CCCCCC'}, {key: 4, colour: '#DDDDDD'},{key: 5, colour: '#AAAAAA'}, {key: 6, colour: '#2E00FF'}],
            price: 3.33
        },
        {
            key: 6, 
            createdBy: 2,
            uri:'https://github.com/Kubalak/ATM_Simulator/raw/main/src/main/resources/textures/4.png', 
            title:"Test 5", 
            material: 'Skóra',
            availableSizes: [39,40,41,42],
            availableColours: [{key: 1, colour:'#AAAAAA'},{key: 2,  colour: '#BBBBBB'}, {key: 3, colour: '#CCCCCC'}, {key: 4, colour: '#DDDDDD'},{key: 5, colour: '#AAAAAA'}, {key: 6, colour: '#2E00FF'}],
            price: 15.2
        },
        {
            key: 7,
            createdBy: 2, 
            uri:'https://github.com/Kubalak/ATM_Simulator/raw/main/src/main/resources/textures/5.png', 
            title:"Test 6",
            material: 'Skóra',
            availableSizes: [39,40,41,42,43,45],
            availableColours: [{key: 1, colour:'#AAAAAA'},{key: 2,  colour: '#BBBBBB'}, {key: 3, colour: '#CCCCCC'}, {key: 4, colour: '#DDDDDD'},{key: 5, colour: '#AAAAAA'}, {key: 6, colour: '#2E00FF'}],
            price: 3.45
        },
        {
            key: 8, 
            createdBy: 2,
            uri:'https://github.com/Kubalak/ATM_Simulator/raw/main/src/main/resources/textures/6.png', 
            title:"Test 7", 
            material: 'Skóra',
            availableSizes: [44,45],
            availableColours: [{key: 1,  colour: '#BBBBBB'}, {key: 2, colour: '#CCCCCC'}, {key: 3, colour: '#DDDDDD'},{key: 4, colour: '#AAAAAA'}, {key: 5, colour: '#2E00FF'}],
            price: 8.82
        },
    ];
    static cart = []; //Na ewentualne inne obiekty do store-a
};

export {Items};