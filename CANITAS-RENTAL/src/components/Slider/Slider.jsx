import React from 'react'
import './Slider.scss'
import './SliderMediaQuery.scss'

const slides = [
  {
    title: "Horses",
    subtitle: "Nature",
    description: "Adventure is never far away",
    image:
      "https://res.cloudinary.com/dfprmjlir/image/upload/v1662422869/CANITAS%20RENTAL/caballobosqueactivities_qm22w6.jpg"
  },
  {
    title: "River",
    subtitle: "Rocks",
    description: "Let your dreams come true",
    image:
      "https://res.cloudinary.com/dfprmjlir/image/upload/v1666026356/CANITAS%20RENTAL/COMPRIMIDAS/river_bm66rw-min_jtvrn6.jpg"
  },
  {
    title: "Autumn",
    subtitle: "Fall",
    description: "A piece of heaven",
    image:
      "https://res.cloudinary.com/dfprmjlir/image/upload/v1666026398/CANITAS%20RENTAL/COMPRIMIDAS/home__picture3_ngvn0c-min_1_vwdvaw.jpg"
  },
  {
    title: "Dirt road",
    subtitle: "View",
    description: "Roads in the forest",
    image:
      "https://res.cloudinary.com/dfprmjlir/image/upload/v1662661230/CANITAS%20RENTAL/pexels-micah-boerma-1008739_gox1wl.jpg"
  },
  {
    title: "Bridges",
    subtitle: "Woods",
    description: "A piece of heaven",
    image:
      "https://res.cloudinary.com/dfprmjlir/image/upload/v1666026352/CANITAS%20RENTAL/COMPRIMIDAS/pexels-kaique-rocha-775201_aoaqbs-min_ajcavd.jpg"
  },
  {
    title: "Road",
    subtitle: "Sunlight",
    description: "Road with a view",
    image:
      "https://res.cloudinary.com/dfprmjlir/image/upload/v1666024492/CANITAS%20RENTAL/COMPRIMIDAS/pexels-trace-hudson-6056787_nt4gls-min_ahwwi6.jpg"
  },
  {
    title: "Conifers",
    subtitle: "Pine",
    description: "Mountain forest",
    image:
      "https://res.cloudinary.com/dfprmjlir/image/upload/v1666026346/CANITAS%20RENTAL/COMPRIMIDAS/pexels-ays%CC%A7e-o%CC%88zkan-12228823_ubmnhv-min_yidf3y.jpg"
  },
  {
    title: "Drone",
    subtitle: "Trees",
    description: "Road view",
    image:
      "https://res.cloudinary.com/dfprmjlir/image/upload/v1665956135/CANITAS%20RENTAL/COMPRIMIDAS/pexels-mali-maeder-109679_po2icn-min_1_nxlgp3.jpg"
  },
  {
    title: "Mountain",
    subtitle: "Cloudy",
    description: "Mountain hike",
    image:
      "https://res.cloudinary.com/dfprmjlir/image/upload/v1665956106/CANITAS%20RENTAL/COMPRIMIDAS/pexels-rido-alwarno-1034887_nmkd5u-min_h0iypc.jpg"
  }
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle} <hr/></h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

const Slider = () => {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  return (
    <>
      <div className="slides">
        <button className='previousButton' onClick={() => dispatch({ type: "PREV" })}>‹</button>
          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);
            return <Slide slide={slide} offset={offset} key={i} />;
          })}
        <button className='nextButton' onClick={() => dispatch({ type: "NEXT" })}>›</button>
      </div>
    </>
  )
}

export default Slider