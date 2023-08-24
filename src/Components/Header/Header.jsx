// react
import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { searchProducts } from "../../Store/Products/ProductAction";
import { logoutUser } from "../../Store/UserName/UserActions";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BsCart3, BsSearch } from "react-icons/bs";
import { NavLink, useLocation, useNavigate, Link } from "react-router-dom";
// mui
import Badge from "@mui/material/Badge";
import { styled } from "@mui/system";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
// icons
import { BsChevronDown } from "react-icons/bs";
import { toast } from "react-toastify";
import { Box } from "@mui/material";

export const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  // useState
  const [nav, setNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const uniqueItems = useSelector((state) => state.cart.uniqueItems);
  const uniqueItemsFavorites = useSelector(
    (state) => state.favorites.uniqueItems
  );
  const token = useSelector((state) => state.user.token);
  const { register, handleSubmit } = useForm();

  // scrollStyle
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // headerMainStyle
  const isHomePage = location.pathname === "/";
  const headerBackground =
    isHomePage && scrollPosition < 500 ? "transparent" : "rgba(0,0,0,0.4)";
  const headerPosition = isHomePage ? "fixed" : "static";

  // const handleSearchInputChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  // const handleSearchSubmit = (event) => {
  //   event.preventDefault();

  //   const searchResults = performSearch(searchQuery);

  //   // Переход на страницу поиска с результатами
  //   navigate("/productSearch", { state: { searchResults, searchQuery } });
  // };

  // const performSearch = (query) => {
  //   const results = products.filter(
  //     (product) => product.name.toLowerCase() === query.toLowerCase()
  //   );

  //   return results;
  // };
  // Поиск
  const onSubmit = ({ search }) => {
    dispatch(searchProducts(search));
    navigate("/productSearch", { state: { search: search } });
  };

  // меню категории

  // const handleClick = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleCategoryClick = (category) => {
  //   dispatch(setCategory(category));
  // };

  const cartItemsCount = uniqueItems.length;
  const favoritesCount = uniqueItemsFavorites.length;

  // dropdown
  const [dropDown, setDropDown] = useState(null);
  const openDropDown = Boolean(dropDown);

  const handleClickDropDown = (event) => {
    setDropDown(event.currentTarget);
  };

  const handleCloseDropDown = () => {
    setDropDown(null);
  };

  const MenuStyled = styled(Menu)(`
  .css-6hp17o-MuiList-root-MuiMenu-list {
    width: 270px;
 
  }
  .css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper{
    top: 50px !important
  }
  `);
  //
  const ProfileStyled = styled(IconButton)`
    margin-left: 0 !important;
    padding: 0 !important;
  `;

  const [profile, setProfile] = useState(null);
  const openProfile = Boolean(profile);

  const handleClickProfile = (event) => {
    setProfile(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setProfile(null);
  };
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={styles.header}>
      <header
        style={{
          background: headerBackground,
          position: headerPosition,
        }}
      >
        <div className="container">
          <div
            className={
              nav ? [styles.box, styles.active].join(" ") : [styles.box]
            }
          >
            <div className={styles.menuItem}>
              <ul>
                <li className={styles.logo}>
                  <NavLink to={"/"}>
                    <img
                      src={
                        "https://logodownload.org/wp-content/uploads/2017/10/Starbucks-logo.png"
                      }
                      alt="logo"
                    />
                  </NavLink>
                </li>
                <li>
                  <div
                    onClick={handleClickDropDown}
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      columnGap: 10,
                      cursor: "pointer",
                    }}
                  >
                    <button
                      className={styles.btnDropdown}
                      id="basic-button"
                      aria-controls={openDropDown ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={openDropDown ? "true" : undefined}
                    >
                      Категории
                    </button>
                    <BsChevronDown
                      cursor={"pointer"}
                      size={17}
                      color={"#fff"}
                    />
                  </div>
                  <MenuStyled
                    id="basic-menu"
                    anchorEl={dropDown}
                    open={openDropDown}
                    onClose={handleCloseDropDown}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleCloseDropDown}>
                      <Link className={styles.downLink} to={"/products"}>
                        Все товары
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseDropDown}>
                      <Link className={styles.downLink}>Бренды</Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseDropDown}>
                      <Link className={styles.downLink}>Мужская одежда</Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseDropDown}>
                      <Link className={styles.downLink}>Женская одежда</Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseDropDown}>
                      <Link className={styles.downLink}>Куртки</Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseDropDown}>
                      <Link className={styles.downLink} to="/checkout">
                        Футболки
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseDropDown}>
                      <Link className={styles.downLink}>Свитшоты</Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseDropDown}>
                      <Link className={styles.downLink}>Рубашки</Link>
                    </MenuItem>
                    <MenuItem
                      className={styles.downLink}
                      onClick={handleCloseDropDown}
                    >
                      <Link
                        className={styles.downLink}
                        to="/productCategory/Джинсы"
                        // onClick={() => handleCategoryClick("Джинсы")}
                      >
                        Джинсы
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseDropDown}>
                      <Link className={styles.downLink}>Платья</Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseDropDown}>
                      <Link className={styles.downLink}>Аксессуары</Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseDropDown}>
                      <Link className={styles.downLink}>Обувь</Link>
                    </MenuItem>
                  </MenuStyled>
                </li>

                <li>
                  <NavLink to="/about">О нас</NavLink>
                </li>
                <li>
                  <NavLink to="/delivery">Доставка и оплата</NavLink>
                </li>
                <li>
                  <NavLink to="/contacts">Контакты</NavLink>
                </li>
              </ul>
            </div>

            <div>
              <ul className={styles.menuIcon}>
                <li>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.searchBlock}>
                      <button type="submit" className={styles.searchIcon}>
                        <BsSearch cursor="pointer" size={20} color="#fff" />
                      </button>

                      <input
                        {...register("search")}
                        type="text"
                        placeholder="Поиск"
                      />
                    </div>
                  </form>
                </li>
                <li>
                  <NavLink to={"/cart"}>
                    <Badge badgeContent={cartItemsCount} color="primary">
                      <BsCart3 cursor="pointer" size={25} color="#fff" />
                    </Badge>
                  </NavLink>
                </li>
                {/* <li>
                  <Badge badgeContent={0} color="primary">
                    <BsCart3
                      onClick={toggleDrawer}
                      cursor="pointer"
                      size={25}
                      color="#fff"
                    />
                  </Badge>
                  <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      display: isOpen ? "block" : "none",
                      zIndex: 1,
                    }}
                    onClick={closeDrawer}
                  />
                  <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: isOpen ? 0 : "-300px",
                      width: "300px",
                      height: "100%",
                      backgroundColor: "#fff",
                      transition: "left 0.3s ease-out",
                      zIndex: 2,
                    }}
                  >
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      <li style={{ padding: "10px" }}>Menu Item 1</li>
                      <li style={{ padding: "10px" }}>Menu Item 2</li>
                      <li style={{ padding: "10px" }}>Menu Item 3</li>
                    </ul>
                  </div>
                </li> */}
                <li>
                  <NavLink to="/favorites">
                    <Badge badgeContent={favoritesCount} color="primary">
                      <AiOutlineHeart cursor="pointer" size={25} color="#fff" />
                    </Badge>
                  </NavLink>
                </li>
                <li>
                  {token ? (
                    <div>
                      <IconButton
                        onClick={handleClickProfile}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={openProfile ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={openProfile ? "true" : undefined}
                      >
                        <Avatar
                          sx={{ width: 28, height: 28, fontSize: "1.15rem" }}
                        >
                          M
                        </Avatar>
                      </IconButton>

                      <Menu
                        anchorEl={profile}
                        id="account-menu"
                        open={openProfile}
                        onClose={handleCloseProfile}
                        onClick={handleCloseProfile}
                        PaperProps={{
                          elevation: 0,
                          sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                            "&:before": {
                              content: '""',
                              display: "block",
                              position: "absolute",
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: "background.paper",
                              transform: "translateY(-50%) rotate(45deg)",
                              zIndex: 0,
                            },
                          },
                        }}
                        transformOrigin={{
                          horizontal: "right",
                          vertical: "top",
                        }}
                        anchorOrigin={{
                          horizontal: "right",
                          vertical: "bottom",
                        }}
                      >
                        <MenuItem onClick={handleCloseProfile}>
                          <div className={styles.menuProfile}>
                            <AiOutlineUser size={25} /> <p>Profile</p>
                          </div>
                        </MenuItem>

                        <div>
                          <MenuItem onClick={handleLogout}>
                            <div className={styles.menuProfile}>
                              <RiLogoutBoxRLine size={25} /> <p>Logout</p>
                            </div>
                          </MenuItem>
                        </div>
                      </Menu>
                    </div>
                  ) : (
                    <NavLink to="/signIn">
                      <AiOutlineUser cursor="pointer" size={25} color="#fff" />
                    </NavLink>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </header>
    </div>
  );
};
