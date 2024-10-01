"use client";
import { useState, useEffect, useRef } from "react";

export default function SnakeGame() {
  const canvasRef = useRef(null);
  const [playingWith, setPlayingWith] = useState(""); // 'matt' or 'wp-engine'
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]); // Snake's initial position
  const [food, setFood] = useState({ x: 15, y: 15 }); // Food initial position
  const [direction, setDirection] = useState({ x: 1, y: 0 }); // Movement direction
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const gridSize = 20; // Size of each grid in the game

  const loadImage = (src) => {
    const img = new Image();
    img.src = src;
    return img;
  };

  const mattImg = loadImage("../images/matt.png"); // Load Matt's image from public directory
  const wpEngineIcon = loadImage("../images/wp-engine.svg"); // Load WP Engine SVG from public directory

  const handleKeyDown = (e) => {
    if (!gameOver) {
      if (e.key === "ArrowUp" && direction.y === 0)
        setDirection({ x: 0, y: -1 });
      if (e.key === "ArrowDown" && direction.y === 0)
        setDirection({ x: 0, y: 1 });
      if (e.key === "ArrowLeft" && direction.x === 0)
        setDirection({ x: -1, y: 0 });
      if (e.key === "ArrowRight" && direction.x === 0)
        setDirection({ x: 1, y: 0 });
    }
  };

  const updateGame = () => {
    if (gameOver) return;

    // Update snake position
    const newSnake = [...snake];
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    // Check for wall collision
    if (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= canvasRef.current.width / gridSize ||
      head.y >= canvasRef.current.height / gridSize
    ) {
      setGameOver(true);
      return;
    }

    // Check for self collision
    for (let i = 1; i < newSnake.length; i++) {
      if (newSnake[i].x === head.x && newSnake[i].y === head.y) {
        setGameOver(true);
        return;
      }
    }

    // Move snake
    newSnake.unshift(head);

    // Check if the snake eats the food
    if (head.x === food.x && head.y === food.y) {
      // Increase score
      setScore(score + 1);

      // Spawn new food
      setFood({
        x: Math.floor(Math.random() * (canvasRef.current.width / gridSize)),
        y: Math.floor(Math.random() * (canvasRef.current.height / gridSize)),
      });
    } else {
      newSnake.pop(); // Remove the tail if no food eaten
    }

    setSnake(newSnake);
  };

  const drawGame = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height); // Clear the canvas

    // Set background color
    ctx.fillStyle = "#282c34";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // Draw food
    if (playingWith === "matt") {
      ctx.drawImage(
        wpEngineIcon,
        food.x * gridSize,
        food.y * gridSize,
        gridSize,
        gridSize
      );
    } else {
      ctx.drawImage(
        mattImg,
        food.x * gridSize,
        food.y * gridSize,
        gridSize,
        gridSize
      );
    }

    // Draw snake
    snake.forEach((segment, index) => {
      if (playingWith === "matt") {
        ctx.drawImage(
          mattImg,
          segment.x * gridSize,
          segment.y * gridSize,
          gridSize,
          gridSize
        );
      } else {
        ctx.drawImage(
          wpEngineIcon,
          segment.x * gridSize,
          segment.y * gridSize,
          gridSize,
          gridSize
        );
      }
    });

    // Draw score
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}`, 10, 20);
  };

  useEffect(() => {
    if (!playingWith) return; // Wait for user to select playing mode

    const interval = setInterval(() => {
      updateGame();
      drawGame();
    }, 150); // Speed of the game

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [playingWith, snake, food, direction]);

  const startGame = (mode) => {
    setPlayingWith(mode);
    setSnake([{ x: 10, y: 10 }]); // Reset snake
    setFood({ x: 15, y: 15 }); // Reset food
    setDirection({ x: 1, y: 0 }); // Reset direction
    setGameOver(false); // Reset game over state
    setScore(0); // Reset score
  };

  const shareScore = () => {
    const shareText = `I just scored ${score} points in Matt vs WP Engine Snake game! Try it at yourdomain.com!`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}`;
    window.open(shareUrl, "_blank");
  };

  const handleTouch = (dir) => {
    if (dir === "up" && direction.y === 0) setDirection({ x: 0, y: -1 });
    if (dir === "down" && direction.y === 0) setDirection({ x: 0, y: 1 });
    if (dir === "left" && direction.x === 0) setDirection({ x: -1, y: 0 });
    if (dir === "right" && direction.x === 0) setDirection({ x: 1, y: 0 });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {gameOver && (
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-gray-800 p-8 rounded-md shadow-lg z-50">
          <h1 className="text-2xl mb-4">Game Over!</h1>
          <p className="mb-4">Your Score: {score}</p>
          <button
            onClick={() => startGame(playingWith)}
            className="bg-blue-500 px-4 py-2 rounded text-white mr-2 mb-2 flex-1"
          >
            Start New Game
          </button>
          <button
            onClick={shareScore}
            className="bg-green-500 px-6 py-3 rounded text-white flex items-center justify-center"
          >
            <i className="fab fa-x-twitter mr-2"></i> Share on X
          </button>
        </div>
      )}
      {!playingWith && (
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => startGame("matt")}
            className="bg-blue-500 px-4 py-2 rounded text-white flex items-center"
          >
            Play with Matt
            <img src="../images/matt.png" alt="Matt" className="w-6 h-6 ml-2" />
          </button>
          <button
            onClick={() => startGame("wp-engine")}
            className="bg-green-500 px-4 py-2 rounded text-white flex items-center"
          >
            Play with WP Engine
            <img
              src="../images/wp-engine.svg"
              alt="WP Engine"
              className="w-6 h-6 ml-2"
            />
          </button>
        </div>
      )}
      <canvas
        ref={canvasRef}
        width="400"
        height="400"
        className="border-4 border-white mb-4"
      ></canvas>
      {playingWith && (
        <div className="grid grid-cols-3 gap-4 mb-4">
          <button
            onClick={() => handleTouch("left")}
            className="bg-gray-700 p-4 rounded flex justify-center items-center"
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <button
            onClick={() => handleTouch("up")}
            className="bg-gray-700 p-4 rounded flex justify-center items-center"
          >
            <i className="fas fa-arrow-up"></i>
          </button>

          <button
            onClick={() => handleTouch("right")}
            className="bg-gray-700 p-4 rounded flex justify-center items-center"
          >
            <i className="fas fa-arrow-right"></i>
          </button>
          <button
            onClick={() => handleTouch("down")}
            className="bg-gray-700 p-4 rounded flex justify-center items-center col-span-3"
          >
            <i className="fas fa-arrow-down"></i>
          </button>
        </div>
      )}
    </div>
  );
}
