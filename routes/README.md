# NodeTut - Routing

### Installation 
Install express dependancies
```sh
$ npm i express
```

**List Persons**
----
  Returns json data about a single user.

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

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```