# Adafri Advertising Campaigns REST API

This project is a RESTful API built with Node.js, TypeScript, Prisma, and MongoDB. It provides basic CRUD (Create, Read, Update, Delete) operations for managing advertising campaigns. The project adheres to a modular folder structure with clear separation of concerns.

## Features

- Create, Read, Update, and Delete advertising campaigns.
- Filter campaigns by status (active or inactive).
- Comprehensive error handling.
- Validations for input data.

## Folder Structure

```bash
src/
├── config/                # Configuration files (e.g., Prisma client)
├── controllers/           # Route controllers
├── middlewares/           # Express middleware (validators, error handling, etc.)
├── routes/                # Route definitions
├── services/              # Business logic and database queries
├── utils/                 # Utility functions
├── prisma/                # Prisma schema
├── app.ts                 # Express app configuration
├── server.ts              # Application entry point
.env.example               # Example environment variables
README.md                  # Documentation
```

## Technologies

- [Node.js](https://nodejs.org/): JavaScript runtime built on Chrome's V8 JavaScript engine.
- [TypeScript](https://www.typescriptlang.org/): A superset of JavaScript that adds static types.
- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [Prisma](https://www.prisma.io/): Next-generation ORM for Node.js and TypeScript.
- [MongoDB](https://www.mongodb.com/): A general-purpose, document-based NoSQL database.
- [Jest](https://jestjs.io/): JavaScript testing framework.

## Environment Setup

Create a .env file in the project root directory and configure the following variables:

```env
DATABASE_URL = 
PORT = 
```

For reference, see the .env.example file.

## Installation and Running the Application

### Prerequisites

- Node.js installed on your machine (v16 or higher recommended)
- MongoDB instance (local or cloud-based, e.g., MongoDB Atlas)

### Steps

1.Clone the repository:

```bash
git clone https://github.com/Flame-eth/adafri-test.git
cd adafri-test
```

2.Install dependencies:

```bash
yarn 
```

or

```bash
npm install
```

3.Configure environment variables:

Copy the contents of the .env.example file to a new .env file and set the appropriate values.

```bash
cp .env.example .env
```

You can update the DATABASE_URL variable to work with your MongoDB instance.

4.Apply prisma migrations:

```bash
npx prisma migrate 
```

5.Run the application:

```bash
yarn dev
```

or

```bash
npm run dev
```

The application will be available at [http://localhost:8080](http://localhost:8080).

## Testing

To run the tests, execute the following command:

```bash
yarn test
```

or

```bash
npm run test
```

## API Endpoints

### Base URL

The base URL for the API is [http://localhost:8080/api/v1](http://localhost:8080/api/v1).

### Endpoints

- Create a new campaign:  
  - `POST /campaigns`
  - Description: Create a new advertising campaign.
  - Request body:  
        ```json
        {
            "title": "Campaign Name",
            "description": "Campaign Description",
            "status": "ACTIVE",
            "impressions": 1000,
            "clicks": 100,
        }
        ```
  - Response:  
        ```json
        {
            "message": "Campaign created successfully",
            "data": {
                "id": "48346836438463463724",
                "title": "Campaign Name",
                "description": "Campaign Description",
                "status": "ACTIVE",
                "impressions": 1000,
                "clicks": 100,
                "createdAt": "2022-01-01T00:00:00.000Z",
                "updatedAt": "2022-01-01T00:00:00.000Z"
            }
            "hasError": false
        }
        ```

- Get all campaigns:  
  - `GET /campaigns`
  - Description: Retrieve all advertising campaigns. Use query parameters to filter campaigns by status. `?status=active` or `?status=inactive`.
  - Query parameters:  
    - `status`: Filter campaigns by status (active or inactive).
  - Response:  
        ```json
        {
            "message": "Campaigns retrieved successfully",
            "data": [
                {
                    "id": "48346836438463463724",
                    "title": "Campaign Name",
                    "description": "Campaign Description",
                    "status": "ACTIVE",
                    "impressions": 1000,
                    "clicks": 100,
                    "createdAt": "2022-01-01T00:00:00.000Z",
                    "updatedAt": "2022-01-01T00:00:00.000Z"
                }
            ],
            "hasError": false
        }
        ```

- Get a campaign by ID:  
  - `GET /campaigns/:id`
  - Description: Retrieve a single advertising campaign by ID.
  - Response:  
         ```json
            {
                "message": "Campaign retrieved successfully",
                "data": {
                    "id": "48346836438463463724",
                    "title": "Campaign Name",
                    "description": "Campaign Description",
                    "status": "ACTIVE",
                    "impressions": 1000,
                    "clicks": 100,
                    "createdAt": "2022-01-01T00:00:00.000Z",
                    "updatedAt": "2022-01-01T00:00:00.000Z"
                },
                "hasError": false
            }
        ```

- Update a campaign:
  - `PUT /campaigns/:id`
  - Description: Update an existing advertising campaign by ID.
  - Request body:  
        ```json
            {
                "title": "Updated Campaign Name",
                "description": "Updated Campaign Description",
                "status": "INACTIVE",
                "impressions": 2000,
                "clicks": 200,
            }
        ```
  - Response:  
        ```json
            {
                "message": "Campaign updated successfully",
                "data": {
                    "id": "48346836438463463724",
                    "title": "Updated Campaign Name",
                    "description": "Updated Campaign Description",
                    "status": "INACTIVE",
                    "impressions": 2000,
                    "clicks": 200,
                    "createdAt": "2022-01-01T00:00:00.000Z",
                    "updatedAt": "2022-01-01T00:00:00.000Z"
                },
                "hasError": false
            }
        ```

- Delete a campaign:
  - `DELETE /campaigns/:id`
  - Description: Delete an advertising campaign by ID.
  - Response:  
        ```json
            {
                "message": "Campaign deleted successfully",
                "data": {
                    "id": "48346836438463463724",
                    "title": "Updated Campaign Name",
                    "description": "Updated Campaign Description",
                    "status": "INACTIVE",
                    "impressions": 2000,
                    "clicks": 200,
                    "createdAt": "2022-01-01T00:00:00.000Z",
                    "updatedAt": "2022-01-01T00:00:00.000Z"
                },
                "hasError": false
            }
        ```

## Testing the API

You can test the API using tools like Postman, Insomnia, or cURL. Below are some sample cURL commands to interact with the API:

## Development Notes 

### Adding a new feature

1.Create a new route in `routes/`.
2.Write the controller logic in `controllers/`.
3.Add service methods in `services/`.
3.Validate input using middleware in `middlewares/`.

### Prisma Database Management

1.Update the Prisma schema in `prisma/schema.prisma`.
2.Run `npx prisma db push` to create a new migration.

## Contribution Guidelines

1. Fork the repository.
2. Clone the forked repository to your local machine.
3. Create a new branch for your changes `git checkout -b feature/branch-name`.
4. Make your changes and commit them `git commit -m 'commit message'`.
5. Push the changes to your fork `git push origin feature/branch-name`.
6. Create a pull request to the main repository.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Author

[Ephraim Oladepo](https://github.com/Flame-eth)