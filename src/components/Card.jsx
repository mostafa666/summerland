import React from "react";
import { Link } from "react-router-dom";

export default function Card({ props }) {
  console.log(props);
  const {
    product: {
      title,
      img,
      alt = "تصویر",
      price = undefined,
      discount = undefined,
      color = undefined,
      size = undefined,
      quantity = undefined,
      freeShipping = true,
      id
    }
  } = props;

  const specialOfferStyle = discount ? "special_offer" : "";

  return (
    <div className={`card__product ${specialOfferStyle}`}>
      <div className="card__product__special_offer">
        {discount && "فروش ویژه"}
      </div>

      <div className="card__product__stroke_line _1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="301.874 196.023 152.603 277.062"
          width="148.6"
          height="273.06"
        >
          <defs>
            <path
              className={`card__product__stroke_line__path ${specialOfferStyle}`}
              d="M451.48 197.03c-72.92 0-118.5-.01-136.73-.01-3.92 0-7.45 2.35-8.97 5.96-.58 1.37-.02.03-.65 1.53a28.526 28.526 0 00-2.24 11.08v21.74l-.02 232.76"
              id={`card__product__stroke_line-${props.key + 100}`}
            />
          </defs>
          <use
            xlinkHref={`#card__product__stroke_line-${props.key + 100}`}
            fillOpacity="0"
            stroke="#000"
            className="stroke__anim-v3"
          />
        </svg>
      </div>
      <div className="card__product__stroke_line _2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="301.883 196.027 152.586 277.063"
          width="148.59"
          height="273.06"
        >
          <defs>
            <path
              className={`card__product__stroke_line__path ${specialOfferStyle}`}
              d="M302.88 470.09h136.73c3.92 0 7.45-2.35 8.97-5.95.58-1.37.02-.04.65-1.54 1.48-3.5 2.24-7.27 2.24-11.08V197.03"
              id={`card__product__stroke_line-${props.key}`}
            />
          </defs>
          <use
            xlinkHref={`#card__product__stroke_line-${props.key}`}
            fillOpacity="0"
            stroke="#000"
            className="stroke__anim-v3"
          />
        </svg>
      </div>

      {freeShipping && <span className="card__product__shipping_icon" />}

      <CardImg src={img} alt={alt} />
      <CardTitle title={title} id={id} />
      <Price price={price} discount={discount} />
      {size && <Size size={size} />}
      {/* {color && <Color color={color} />} */}
      {quantity && <Status quantity={quantity} />}
    </div>
  );
}

const CardTitle = ({ title, id }) => (
  <Link to={`/product?id=${id}`} className="card__product__title">
    {title}
  </Link>
);

const CardImg = ({ src, alt }) => (
  <div className="card__product__img_box">
    <img className="card__product__img_box__img" src={src} alt={alt} />
  </div>
);

const Size = ({ size }) => {
  return (
    <div className="card__product__size">
      {size.map(item => {
        return <span className="card__product__size--single">{item}</span>;
      })}
    </div>
  );
};

const Price = ({ price, discount }) => {
  const calcPrice = price - discount * price;
  const priceElem =
    discount && discount > 0 ? (
      <div className="card__product__price dis">
        <del className="card__product__price--del">{price}</del>
        <div>
          <span className="card__product__price--amount special_offer">
            {calcPrice}
          </span>
          <span className="card__product__price--currency special_offer">
            تومان
          </span>
        </div>
      </div>
    ) : (
      <div className="card__product__price ndis">
        <span className="card__product__price--amount">{price}</span>
        <span className="card__product__price--currency">تومان</span>
      </div>
    );
  return priceElem;
};

const Status = ({ quantity }) => {
  const status =
    quantity > 0 ? (
      quantity < 2 ? (
        <span className="card__product__status lst">آخرین موجودی</span>
      ) : null
    ) : (
      <div className="card__product__status unavil">ناموجود</div>
    );

  return status;
};

const Color = ({ color }) => {
  const colorElem =
    color.length > 0 ? (
      <div className="card__product__color">
        {color.map(item => {
          return (
            <div
              className="card__product__color--item"
              style={{ backgroundColor: item }}
            ></div>
          );
        })}
      </div>
    ) : (
      undefined
    );
  return colorElem;
};
