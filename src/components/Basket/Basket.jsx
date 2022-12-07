import React, { useState } from "react";

import { Button, IconButton } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./Basket.scss";

export const Basket = () => {
  const [open, setOpen] = useState(false);
  const [listData] = useState([
    {
      id: 0,
      name: "test 0",
      price: "111",
    },
    {
      id: 1,
      name: "test 1",
      price: "500000",
    },
  ]);

  return (
    <div className="basket">
      <div className="basket_header">
        <div className="basket_header_title">{listData.length} Adult</div>
        <div className="basket_header_total">
          Total to pay:{" "}
          <span>
            $<b>68</b>.60
          </span>
        </div>
        <Button variant="contained">Continue</Button>
        <IconButton
          className="toggle_button"
          aria-label="delete"
          onClick={() => setOpen(!open)}
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </div>
      <div className={`basket_content ${open ? "close-content" : ""}`}>
        <div className="basket_content_header">
          Outbound
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
        <div className="basket_content_list">
          {listData.map((i) => (
            <div className="basket_content_item">
              <div className="basket_content_item_name">
                {i.name ? i.name : "-"}
              </div>
              <div className="basket_content_item_price">
                {i.price ? `${i.price} $` : "-"}
              </div>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
