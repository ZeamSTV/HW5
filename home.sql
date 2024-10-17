INSERT INTO room (name, description, image, temperature, humidity)
VALUES
('Living room', '4 lights', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT63Q2xEU_xuhJE6F3OfRrUAI_MG3e1EpbMTA&s', 29.4, 50.2),
('Bed room', '2 lights', 'https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2023/09/Indulge-In-Opulence-50-Luxurious-Bedroom-Decor-Ideas-2-1024x1024.jpeg', 25.4, 53.1),
('Kitchen room', '2 lights', 'https://media.designcafe.com/wp-content/uploads/2024/03/11192712/simple-kitchen-design.jpg', 20.1, 43.4);

use home
select * from room
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin1';