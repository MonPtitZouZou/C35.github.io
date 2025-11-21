@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');

* { margin:0; padding:0; box-sizing:border-box; }

body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(-45deg, #0f0c29, #302b63, #24243e);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  color: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes gradient { 
  0%{background-position:0% 50%} 
  50%{background-position:100% 50%} 
  100%{background-position:0% 50%} 
}

#users-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.user-container {
  text-align: center;
  background: rgba(0,0,0,0.35);
  padding: 30px 20px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.5);
  min-width: 200px;
  max-width: 90vw;
  flex: 0 0 auto;
  position: relative;
  transition: transform 0.3s;
}

.user-container h1 {
  font-size: 1.8em;
  margin: 10px 0;
  word-break: break-word;
  text-align: center;
}

.user-container h2 { white-space: nowrap; }

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 6px solid #7289da;
  box-shadow: 0 0 30px rgba(114,137,218,0.7);
  margin-bottom: 20px;
}

.status {
  margin: 15px 0;
  padding: 10px 20px;
  border-radius: 50px;
  font-weight: 800;
  font-size: 1.2em;
  display: inline-block;
  min-width: 180px;
}
.online { background: #43b581; box-shadow: 0 0 20px #43b581; }
.dnd { background: #f04747; box-shadow: 0 0 20px #f04747; }
.idle { background: #faa61a; box-shadow: 0 0 20px #faa61a; }
.offline { background: #747f8d; }

.birthday-countdown {
  margin-top: 15px;
  font-size: 1.2em;
  font-weight: 600;
  color: #ffd700;
}

.confetti {
  position: fixed;
  width: 10px;
  height: 10px;
  background-color: gold;
  top: -10px;
  animation: fall 5s linear infinite;
  border-radius: 50%;
  opacity: 0.8;
  z-index: -1; 
}

@keyframes fall {
  0% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(110vh) rotate(360deg); }
}

/* Glow animation pour l'anniversaire */
.user-container.birthday {
  animation: birthdayGlow 1.5s infinite alternate;
  box-shadow: 0 0 20px 5px gold, 0 0 30px 10px #ff69b4, 0 0 40px 15px #00ffff;
  border: 3px solid gold;
}

@keyframes birthdayGlow {
  0% {
    transform: scale(1);
    box-shadow: 0 0 10px 5px gold, 0 0 15px 10px #ff69b4, 0 0 20px 15px #00ffff;
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 20px 10px gold, 0 0 30px 15px #ff69b4, 0 0 40px 20px #00ffff;
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 10px 5px gold, 0 0 15px 10px #ff69b4, 0 0 20px 15px #00ffff;
  }
}
