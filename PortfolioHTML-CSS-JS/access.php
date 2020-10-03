<?php

    session_start();
    if (isset($_SESSION['user_id'])) {
        header('Location: /ross2/index.php');
    }

    require 'database.php';

    $message = '';

    if ( !empty($_POST['Ruser']) && !empty($_POST['Remail']) && !empty($_POST['Rpassword']) ) {
        $sql = 'INSERT INTO users (user, email, password) VALUES (:Ruser, :Remail, :Rpassword)';
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':Ruser', $_POST['Ruser']);
        $stmt->bindParam(':Remail', $_POST['Remail']);
        $password = password_hash($_POST['Rpassword'], PASSWORD_BCRYPT);
        $stmt->bindParam(':Rpassword', $password);

        if ($stmt->execute()) {
            $message = 'New user created succesfully!';
        }
        else{
            $message = 'Sorry. Isuues creating your user.';
        }
    }

    if( !empty($_POST['Luser']) && !empty($_POST['Lpassword'])) {
        $records = $conn->prepare('SELECT id, user, password FROM users WHERE user = :Luser');
        $records->bindParam(':Luser', $_POST['Luser']);
        $records->execute();
        $results = $records->fetch(PDO::FETCH_ASSOC);

        if(count($results) > 0 && password_verify($_POST['Lpassword'], $results['password'])) {
            $_SESSION['user_id'] = $results['id'];
            header('Location: /ross2/index.php');
        } else{
            $message = "Sorry. Credentials are invalid.";
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="css/access.css" />
        <title>Access</title>
    </head>
    <body>
        <section id="header">
            <div class="header navig">
                <div class="nav-bar">
                    <div class="brand">
                        <a href="index.html#hero"><h1><span>R</span>oss</h1></a>
                    </div>
                    <div class="nav-list">
                        <div class="hamburger"><div class="bar"></div></div>
                        <ul>
                            <li><a href="index.html#hero" data-after="Home">Home</a></li>
                            <li><a href="index.html#services" data-after="Service">Services</a></li>
                            <li><a href="index.html#projects" data-after="Projects">Projects</a></li>
                            <li><a href="index.html#about" data-after="About">About</a></li>
                            <li><a href="index.html#contact" data-after="Contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <main>
            <div class="container">
                <div class="forms-container">
                    <div class="login-content"> 
                        <!-- Login form -->
                        <form action="access.php" method="POST" class="sign-in-form">
                            <?php if (!empty($message)): ?>
                                <p> <?= $message ?> </p>
                            <?php endif; ?>
                            <img src="img/avatar.svg">
                            <h2 class="title">Login</h2>
                            <div class="input-field one">
                                <div class="i">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="div">
                                    <h5>Username</h5>
                                    <input type="text" name="Luser" class="input">
                                </div>
                            </div>
                            <div class="input-field pass">
                                <div class="i"> 
                                    <i class="fas fa-lock"></i>
                                </div>
                                <div class="div">
                                    <h5>Password</h5>
                                    <input type="password" name="Lpassword" class="input">
                                </div>
                            </div>
                            <a href="#">Forgot Password?</a>
                            <input type="submit" class="btn" value="Login">
                            <p class="social-text">Or register with social platforms</p>
                            <div class="social-media">
                                <a href="#" class="social-icon">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="social-icon">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#" class="social-icon">
                                    <i class="fab fa-google"></i>
                                </a>
                                <a href="#" class="social-icon">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>
                        <!-- Register form -->
                        <form action="access.php" method="POST" class="sign-up-form">
                            <?php if (!empty($message)): ?>
                                <p> <?= $message ?> </p>
                            <?php endif; ?>
                            <img src="img/avatar.svg">
                            <h2 class="title">Register</h2>
                            <div class="input-field one">
                                <div class="i">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="div">
                                    <h5>Username</h5>
                                    <input type="text" name="Ruser" class="input" />
                                </div>
                            </div>
                            <div class="input-field email">
                                <div class="i">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="div">
                                    <h5>Email</h5>
                                    <input type="text" name="Remail" class="input" />
                                </div>
                            </div>
                            <div class="input-field pass">
                                <div class="i">
                                    <i class="fas fa-lock"></i>
                                </div>
                                <div class="div">
                                    <h5>Password</h5>
                                    <input type="password" name="Rpassword" class="input" />
                                </div>
                            </div>
                            <input type="submit" class="btn" value="Register" />
                            <p class="social-text">Or login with social platforms</p>
                            <div class="social-media">
                                <a href="#" class="social-icon">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="social-icon">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#" class="social-icon">
                                    <i class="fab fa-google"></i>
                                </a>
                                <a href="#" class="social-icon">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>
                        <!-- End Register form -->
                    </div>
                </div>
    
                <div class="panels-container">
                    <div class="panel left-panel">
                        <div class="content">
                            <h3>New here?</h3>
                            <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                            </p>
                            <button class="btn transparent" id="sign-up-btn">
                            Register
                            </button>
                        </div>
                        <img src="img/men.svg" class="image" alt="" />
                        </div>
                        <div class="panel right-panel">
                        <div class="content">
                            <h3>One of us?</h3>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                            </p>
                            <button class="btn transparent" id="sign-in-btn">
                            Login
                            </button>
                        </div>
                        <img src="img/hacker.svg" class="image" alt="" />
                        </div>
                    </div>
            </div>
        </main>

        <script src="js/app.js"></script>
        <script src="js/login.js"></script>
    </body>
</html>
