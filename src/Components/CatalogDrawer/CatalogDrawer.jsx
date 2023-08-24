// FilterDrawer.js

import React, { useState } from "react";
import styles from "./CatalogDrawer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../Store/Products/ProductAction";
// mui
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/system";
import Slider from "@mui/material/Slider";
// icons
import catalog from "../../assets/image/Icons/catalog.png";
import { BsFilterLeft } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { RiTruckLine } from "react-icons/ri";
import { BsChevronDown, BsWhatsapp, BsTelegram } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";

export default function CatalogDrawer() {
  const dispatch = useDispatch();

  // drawerCloseOpen
  const [state, setState] = useState({
    left: false,
  });
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, left: open });
  };
  const handleCategoryClick = (category) => {
   console.log('object')
  };

  const list = () => (
    <Box sx={{ width: 350 }} role="presentation">
      <List sx={{ pt: 0 }}>
        <div className={styles.headList}>
          <div className={styles.headListBlock}>
            <div>
              <h1>Фильтр</h1>
            </div>

            <TfiClose
              onClick={toggleDrawer(false)}
              cursor={"pointer"}
              size={20}
            />
          </div>
        </div>

        <div className={styles.catalogsList}>
          <button onClick={() => handleCategoryClick(null)}>Все товары</button>

          <button onClick={() => handleCategoryClick("Новинки")}>
            Новинки
          </button>

          <button onClick={() => handleCategoryClick("Бренды")}>Бренды</button>

          <button onClick={() => handleCategoryClick("Мужская одежда")}>
            Мужская одежда
          </button>

          <button onClick={() => handleCategoryClick("Женская одежда")}>
            Женская одежда
          </button>

          <button onClick={() => handleCategoryClick("Куртка")}>Куртки</button>

          <button onClick={() => handleCategoryClick("Футболки")}>
            Футболки
          </button>

          <button onClick={() => handleCategoryClick("Свитшоты")}>
            Свитшоты
          </button>

          <button onClick={() => handleCategoryClick("Рубашки")}>
            Рубашки
          </button>

          <button onClick={() => handleCategoryClick("Джинсы")}>Джинсы</button>

          <button onClick={() => handleCategoryClick("Аксессуары")}>
            Аксессуары
          </button>

          <button onClick={() => handleCategoryClick("Обувь")}>Обувь</button>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      <img
        onClick={toggleDrawer(true)}
        style={{ width: 35, cursor: "pointer" }}
        src={catalog}
        alt="catalog"
      />

      <Drawer anchor="left" open={state.left} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
