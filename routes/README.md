# NodeTut - Routing

### Installation 
Install express dependancies
```sh
$ npm i express
```

**List Persons**
----
  Returns json data about all / a single user(s).

* **URL**

  /api/persons

* **Method:**

  `GET`
  
*  **URL Params**

   **Optional:**
   name=[alphanumeric] 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    [
    {
        "name": "JohnDoe3",
        "email": "johndoe@gmail.com",
        "nric": "S8866557A",
        "address": {
            "street": "Tomorrowland",
            "unit": "#01-200",
            "postalCode": 100000
        },
        "siblings": [
            {
                "name": "John Bro",
                "nric": "S1112223A"
            },
            {
                "name": "John Sis",
                "nric": "S9988774A"
            }
        ]
    }
    ]
    ```
 
* **Error Response:**

  * **Code:** 400 NOT FOUND <br />
    **Content:** `Invalid Person`

* **Sample Call:**
----

**Insert Person**
----
  Insert a person and return json data of all persons.

* **URL**

  /api/persons

* **Method:**

  `POST`
  
*  **URL Params**

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    [
    {
        "name": "JohnDoe3",
        "email": "johndoe@gmail.com",
        "nric": "S8866557A",
        "address": {
            "street": "Tomorrowland",
            "unit": "#01-200",
            "postalCode": 100000
        },
        "siblings": [
            {
                "name": "John Bro",
                "nric": "S1112223A"
            },
            {
                "name": "John Sis",
                "nric": "S9988774A"
            }
        ]
    }
    ]
    ```
 
* **Error Response:**

* **Sample Call:**
  ```json
    {
        "name": "JohnDoe3",
        "email": "johndoe@gmail.com",
        "nric": "S8866557A",
        "address": {
          "street": "Tomorrowland",
          "unit": "#01-200",
          "postalCode": 100000
        },
        "siblings": [
            {
                "name": "John Bro",
                "nric": "S1112223A"
            },
            {
                "name": "John Sis",
                "nric": "S9988774A"
            }
        ]
    }
  ```