# notification-service
Send the notification service to the respected email if the email exists
- Built a high-performance Notification Service to handle real-time and email notifications for user events such as ride bookings and status updates.
- Designed and implemented a scalable MySQL database schema using Sequelize ORM for efficient management of notification records.
- Containerised the service with Docker, running MySQL, RabbitMQ, and the notification service in isolated containers for seamless deployment and scalability.
- Implemented an event-driven architecture using RabbitMQ, ensuring decoupled, reliable processing of real-time and email notifications.
- Integrated Nodemailer for transactional emails, sending booking confirmations and ride details.
- Enforced input validation with Zod, ensuring payload integrity and preventing invalid data.
- Enhanced system reliability with structured logging and error tracking using Winston.
- Exposed RESTful APIs via Express.js, allowing external services to trigger notifications efficiently.
- Optimised for high throughput, capable of processing up to 50 notifications per minute.
