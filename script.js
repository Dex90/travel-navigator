body, html {
    height: 100%;
    margin: 0;
    font-family: Arial, sans-serif;
}
#map {
    position: absolute;
    top: 50px;
    bottom: 0;
    width: 100%;
    z-index: 1;
}
.topbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    background: #ffffff;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    padding: 0 8px;
}
.topbar input, .topbar select {
    font-size: 16px;
    padding: 6px;
}
.topbar input {
    width: 40%;
}
#diario {
    position: fixed;
    top: 60px;
    right: 10px;
    background: white;
    padding: 10px;
    border: 1px solid #ccc;
    max-height: 300px;
    overflow-y: auto;
    z-index: 9999;
    width: 200px;
}
#visitedList li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
}
#visitedList li button {
    background: red;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 2px 6px;
    cursor: pointer;
}