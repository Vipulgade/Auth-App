import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Button,
  Grid,
  Tabs,
  Tab,
  Paper,
  Avatar,
  Box,
} from "@mui/material";
import {
  Search,
  FilterList,
  Home,
  Notifications,
  ShoppingCart,
  Chat,
  Wallet,
  Settings,
  ThumbUp,
  ChatBubble,
  Share,
} from "@mui/icons-material";
import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom"; 
// Component for rendering posts

const PostList = () => {
  const posts = [
    {
      id: 1,
      user: "John Doe",
      username: "@john_doe",
      img: "http://thewowstyle.com/wp-content/uploads/2015/01/nature.jpg",
      avatar: "https://source.unsplash.com/50x50/?man",
      description: "Exploring the beauty of nature on my latest trip!",
    },
    {
      id: 2,
      user: "Alice Smith",
      username: "@alice_smith",
      img: "https://tse2.mm.bing.net/th?id=OIP.7cRYFyLoDEDh4sRtM73vvwHaDg&pid=Api&P=0&h=180",
      avatar: "https://source.unsplash.com/50x50/?woman",
      description: "City lights make everything feel so alive! 🌆",
    },
    {
      id: 3,
      user: "Mike Johnson",
      username: "@mike_johnson",
      img: "https://tse2.mm.bing.net/th?id=OIP.3wK8Se-MFnvDOIjzWfrLEwHaFj&pid=Api&P=0&h=180",
      avatar: "https://source.unsplash.com/50x50/?person",
      description: "Tech is evolving rapidly, and I love staying ahead of it!",
    },
    {
      id: 4,
      user: "Emily Davis",
      username: "@emily_davis",
      img: "https://tse2.mm.bing.net/th?id=OIP.esdHnlB-eysViOsi0G_x9QHaEo&pid=Api&P=0&h=180",
      avatar: "https://source.unsplash.com/50x50/?girl",
      description: "Adventures are the best way to learn and grow!",
    },
    {
      id: 5,
      user: "Robert Brown",
      username: "@robert_brown",
      img: "https://tse3.mm.bing.net/th?id=OIP.PQQsktmxZ8Bl1Idclk0LSgHaEo&pid=Api&P=0&h=180",
      avatar: "https://source.unsplash.com/50x50/?boy",
      description: "Tried some amazing street food today! 🍔",
    },
  ];
 
  return (
    <Box className="post-container">
      {posts.map((post) => (
        <Paper key={post.id} className="post">
          <Box className="post-header">
            <Avatar src={post.avatar} alt={post.user} />
            <Box className="post-user">
              <h4>{post.user}</h4>
              <p>{post.username}</p>
            </Box>
          </Box>
          <img src={post.img} alt="Post" className="post-image" />
          <p className="post-description">{post.description}</p>
          <Box className="post-actions">
            <IconButton>
              <ThumbUp /> 9.8k
            </IconButton>
            <IconButton>
              <ChatBubble /> 8.6k
            </IconButton>
            <IconButton>
              <Share /> 7.2k
            </IconButton>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear authentication tokens (if any)
    localStorage.removeItem("authToken");
  
    // Redirect to login page
    navigate("/login");
  };
  return (
    <div className="dashboard-container">
      {/* Header */}
      <AppBar position="static" className="header">
        <Toolbar className="toolbar">
          {/* Left - Logo */}
          <div className="logo">LOGO</div>

          {/* Center - Search Bar with Overlapping Filter Icon */}
          <div className="search-container">
            <Search className="search-icon" />
            <InputBase className="search-input" placeholder="Search here..." />
            <IconButton className="filter-icon">
              <FilterList />
            </IconButton>
          </div>

          {/* Right - User Profile & "Become a Seller" Button */}
          <div className="header-right">
            <Button variant="contained" className="seller-button">
              Become a Seller
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Grid container className="main-content">
        {/* Sidebar (Left) */}
        <Grid item xs={2} className="sidebar">
          <ul>
            <li>
              <Home /> Home
            </li>
            <li>
              <Notifications /> Notifications
            </li>
            <li>
              <ShoppingCart /> Shop
            </li>
            <li>
              <Chat /> Conversation
            </li>
            <li>
              <Wallet /> Wallet
            </li>
            <li>
              <Settings /> Settings
            </li>
          </ul>
          <div className="logout-container">
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </Grid>

        {/* Posts Section (Center) */}
        <Grid item xs={6} className="post-section">
          <PostList />
        </Grid>

        {/* Right Sidebar */}
        <Grid item xs={4} className="right-sidebar">
          <Tabs className="tabs">
            <Tab label="Artists" className="ar" />
            <Tab label="Photography" />
          </Tabs>

          {[1, 2].map((index) => (
            <Paper key={index} className="user-post">
              <Avatar src={`https://source.unsplash.com/50x50/?person${index}`} />
              <div>
                <h4>User {index}</h4>
                <p>@user{index}</p>
              </div>
            </Paper>
          ))}
        </Grid>
      </Grid>

      {/* Footer */}
      <footer className="footer">
        <div>
          <div>© 2022 LOGO</div>
          <div>Developed by Your Name</div>
        </div>
        <div className="footer-links">
          <span>Privacy</span> | <span>Terms of Service</span> | <span>Cookie Notice</span>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
