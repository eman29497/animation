import {createSlice} from '@reduxjs/toolkit';
const initialState={
    trend:{
        title:'Modern UI Trends',
        description:'Exploring movements shaping the future of 2026',
        cards:[
            {id:1,name:'Glassmorphism',detail:'Premium blurry effects '},
            {id:2,name:'Minimalism' ,detail:'Clean and simple design'},
            {id:3,name:'Neumorphism',detail:'Soft shadows and organic UI'}
        ]
    },
    illustrations:[
        {id:1,title:'Creative Vision',desc:'Visuals speak louderthan words'},
        {id:2,name:'Modern Tech', desc:'Digital concepts to life with style'}
    ],
    animations:[
        {id:1,
            title:'Smooth Scaling',
            desc:'Elements grow and shrink naturally using the Scale property, giving a breathing feel to the UI'
        },
        {id:2,
            title:'Floating Motion',
            desc:'Gentle Y-axis movement that creates effect, perfect for hero illustration'
        }
    ]
};
const contentSlice = createSlice({
    name:'content',
    initialState,
    reducers:{},
});
export default contentSlice.reducer;
