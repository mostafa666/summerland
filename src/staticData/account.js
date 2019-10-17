import img1 from './../common/images/105800619.jpg'
import close from './../common/images/cancel.svg'
export const tabelHeader = () => [
    {
        text:'عکس',
        id:1
    },{
        text:'مبلغ',
        id:2
    },{
        text:'وضعیت',
        id:3
    },{
        text:'جزییات بیشتر',
        id:5
    },{
        text:'حدف',
        id:4
    }
]

export const tableBody = () => (
    {
        img:img1,
        title:"پیراهن مردانه یقه گرد آستین کوتاه",
        price:"1000",
        isExists:false,
        closeIcon:close,
        color:"آبی",
        size:"XL",
        count:2
    }
)