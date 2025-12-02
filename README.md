<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Meu Site Moderno</title>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Poppins', sans-serif;
            background: #f2f2ff;
            color: #333;
        }

        header {
            background: linear-gradient(90deg, #4a4aff, #6b6bff);
            color: white;
            padding: 25px;
            text-align: center;
            font-size: 30px;
            font-weight: 700;
            letter-spacing: 1px;
            animation: fadeInDown 1s ease;
        }

        nav {
            background: white;
            padding: 15px 10px;
            display: flex;
            justify-content: center;
            gap: 30px;
            position: sticky;
            top: 0;
            z-index: 10;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }

        nav a {
            text-decoration: none;
            color: #4a4aff;
            font-weight: 600;
            font-size: 16px;
            transition: 0.3s;
        }
        nav a:hover { color: #2222ff; }

        .banner {
            background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1350&q=80');
            background-size: cover;
            background-position: center;
            color: white;
            text-align: center;
            padding: 100px 20px;
            font-size: 36px;
            font-weight: 700;
            animation: zoomIn 1.2s ease;
        }

        section {
            max-width: 900px;
            margin: 50px auto;
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            animation: fadeIn 1.2s ease;
        }

        h2 {
            color: #4a4aff;
            font-size: 26px;
            margin-bottom: 10px;
        }

        .whatsapp-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #25D366;
            color: white;
            padding: 15px 18px;
            border-radius: 50px;
            font-size: 18px;
            text-decoration: none;
            font-weight: 600;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            animation: fadeInUp 1s ease;
        }

        footer {
            text-align: center;
            padding: 25px;
            margin-top: 40px;
            background: #ddd;
            font-size: 15px;
            color: #333;
        }

        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomIn {
            from { opacity: 0; transform: scale(1.1); }
            to { opacity: 1; transform: scale(1); }
        }
    </style>
</head>
<body>
    <header>
        Meu Site Profissional Moderno
    </header>

    <nav>
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Serviços</a>
        <a href="#contato">Contato</a>
    </nav>

    <div class="banner" id="inicio">
        Bem-vindo ao meu site!
    </div>

    <section id="sobre">
        <h2>Sobre Mim</h2>
        <p>
            Site moderno totalmente personalizável, criado com HTML, CSS e efeitos visuais. Aqui você pode apresentar quem você é, o que faz e como as pessoas podem te encontrar.
        </p>
    </section>

    <section id="servicos">
        <h2>Serviços</h2>
        <p>• Desenvolvimento de sites<br>
           • Criação de identidade visual<br>
           • Consultoria digital<br>
           • Gestão de redes sociais
        </p>
    </section>

    <section id="contato">
        <h2>Contato</h2>
        <p>Email: exemplo@email.com</p>
        <p>Instagram: @seuusuario</p>
    </section>

    <a class="whatsapp-btn" href="https://wa.me/5500000000000" target="_blank">WhatsApp</a>

    <footer>
        © 2025 - Meu Site Moderno. Todos os direitos reservados.
    </footer>
</body>
</html>
