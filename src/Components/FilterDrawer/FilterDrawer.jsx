import React, { useState, useEffect } from "react";
import styles from "./FilterDrawer.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBrands,
  fetchColors,
  fetchCategories,
  fetchSizes,
  fetchGender,
  fetchFilteredProducts,
} from "../../Store/Filter/FilterAction";
import { useNavigate } from "react-router-dom";
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
import filter from "../../assets/image/Icons/filter.png";
import { BsFilterLeft } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { RiTruckLine } from "react-icons/ri";
import { BsChevronDown, BsWhatsapp, BsTelegram } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";

export default function FilterDrawer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.filter.brands);
  const colors = useSelector((state) => state.filter.colors);
  const sizes = useSelector((state) => state.filter.sizes);
  const gender = useSelector((state) => state.filter.gender);
  console.log(gender);
  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchColors());
    dispatch(fetchSizes());
    dispatch(fetchGender());
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleApplyFilters = () => {
    // Собираем выбранные фильтры
    const selectedBrands = brands
      .filter((brand) => brand.isSelected)
      .map((brand) => brand.name);
    const selectedSizes = sizes
      .filter((size) => size.isSelected)
      .map((size) => size.name);
    // ...

    // Собираем параметры для URL
    const queryParams = new URLSearchParams();
    selectedBrands.forEach((brand) => queryParams.append("brand", brand));
    selectedSizes.forEach((size) => queryParams.append("size", size));
    // ...

    // Обновляем URL с выбранными фильтрами
    navigate(`/shop/product/?${queryParams.toString()}`);
  };
  // cssMui
  const CustomAccordion = styled(Accordion)({
    boxShadow: "none",
    background: "transparent",
    position: "static",
    borderBottomLeftRadius: "0 !important",
    borderBottomRightRadius: "0 !important",
    borderTopLeftRadius: "0 !important",
    borderTopRightRadius: "0 !important",
    borderBottom: "none",
    "&::before": {
      content: "none",
    },
    "& .MuiAccordionSummary-content.Mui-expanded": {
      margin: 0,
    },
    "&.Mui-expanded": {
      margin: 0, // Убираем margin при раскрытии последнего аккордеона
    },
  });
  const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    padding: 0,
    minHeight: 55,
    "&.Mui-expanded": {
      minHeight: 55, // Устанавливаем minHeight на 'unset' при раскрытии аккордеона
    },
  }));
  const CustomAccordionDetails = styled(AccordionDetails)({
    padding: 0,
  });

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

        <div className={styles.accordion}>
          <CustomAccordion>
            <div className={styles.accordionBox}>
              <div className={styles.infoHead}>
                <CustomAccordionSummary
                  expandIcon={<BsChevronDown />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h1>Размер</h1>
                </CustomAccordionSummary>
              </div>
            </div>
            <CustomAccordionDetails>
              <div className={styles.options}>
                {sizes.map((size, i) => (
                  <div>
                    <label htmlFor="size">{size.name}</label>
                    <input type="checkbox" value={size.name} key={i} />
                  </div>
                ))}
              </div>
            </CustomAccordionDetails>
          </CustomAccordion>
          <CustomAccordion>
            <div className={styles.accordionBox}>
              <div className={styles.infoHead}>
                <CustomAccordionSummary
                  expandIcon={<BsChevronDown />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h1>Цвет</h1>
                </CustomAccordionSummary>
              </div>
            </div>

            <CustomAccordionDetails>
              <div className={styles.options}>
                {colors.map((color, i) => (
                  <button key={i}>{color.name}</button>
                ))}
              </div>
            </CustomAccordionDetails>
          </CustomAccordion>

          <CustomAccordion>
            <div className={styles.accordionBox}>
              <div className={styles.infoHead}>
                <CustomAccordionSummary
                  expandIcon={<BsChevronDown />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h1>Бренд</h1>
                </CustomAccordionSummary>
              </div>
            </div>
            <CustomAccordionDetails>
              <div className={styles.options}>
                {brands.map((brand, i) => (
                  <div>
                    <label htmlFor="brand">{brand.name}</label>
                    <input
                      type="checkbox"
                      value={brand.name}
                      id="brand"
                      key={i}
                    />
                  </div>
                ))}
              </div>
            </CustomAccordionDetails>
          </CustomAccordion>

          <CustomAccordion>
            <div className={styles.accordionBox}>
              <div className={styles.infoHead}>
                <CustomAccordionSummary
                  expandIcon={<BsChevronDown />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h1>Пол</h1>
                </CustomAccordionSummary>
              </div>
            </div>

            <CustomAccordionDetails>
              <div className={styles.options}>
                {gender.map((gender, i) => (
                  <button key={i}>{gender.name}</button>
                ))}
              </div>
            </CustomAccordionDetails>
          </CustomAccordion>
          <CustomAccordion>
            <div className={styles.accordionBox}>
              <div className={styles.infoHead}>
                <CustomAccordionSummary
                  expandIcon={<BsChevronDown />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h1>Цена</h1>
                </CustomAccordionSummary>
              </div>
            </div>
            <CustomAccordionDetails>
              <div className={styles.slider}>
                <Slider
                  getAriaLabel={() => "Price range"}
                  valueLabelDisplay="auto"
                  min={10}
                  max={100}
                />
              </div>
            </CustomAccordionDetails>
          </CustomAccordion>
        </div>
        <div className={styles.resetButton}>
          <button>Сбросить фильтры</button>
          <button onClick={handleApplyFilters}>Применить фильтры</button>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      <img
        onClick={toggleDrawer(true)}
        style={{ width: 25, cursor: "pointer" }}
        src={filter}
        alt="filter"
      />

      <Drawer anchor="left" open={state.left} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
