import React, { useState, useEffect } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);

  // Fetch all items
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching food list");
      }
    } catch (error) {
      toast.error("Server error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  // Delete item by ID
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      const response = await axios.delete(`${url}/api/food/remove/${id}`);
      if (response.data.success) {
        setList(list.filter((item) => item._id !== id));
        toast.success("Item deleted successfully");
      } else {
        toast.error("Failed to delete item");
      }
    } catch (error) {
      toast.error("Server error while deleting");
    }
  };

  return (
    <div className="food-list-page">
      <h2 className="food-list-title">🍽️ All Food Items</h2>

      <div className="food-cards">
        {list.map((item) => {
          const image = item.image || item.imageUrl || item.foodImage || "/no-image.png";
          const name = item.name || item.foodName || item.title || "No Name";
          const category = item.category || "Unknown";
          const price = item.price || 0;

          return (
            <div className="food-card" key={item._id}>
              <img
                src={image.startsWith("http") ? image : `${url}/images/${image}`}
                alt={name}
                className="food-card-image"
                onError={(e) => (e.target.src = "/no-image.png")}
              />
              <div className="food-card-content">
                <h3>{name}</h3>
                <p className="category">{category}</p>
                <p className="price">₹ {price}</p>
                <button className="delete-btn" onClick={() => handleDelete(item._id)}>
                  ✖
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
