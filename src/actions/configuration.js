
export default {
    
    //END_POINT : "https://fqndkbn9sk.execute-api.us-east-1.amazonaws.com/dev";
    END_POINT : "http://localhost:8060/lms",
    // Travelers's path

    ADMIN: "/admin",

    GET_AUTHORS : "/readAllAuthors?authorName=",

    /*  GET: airports?name=b */
    LIST_AIRPORTS_BY_NAME : "/airports?name=",
    
    /*
    GET: /flights?date=2019-05-01&depAirportId=1&arrAirportId
    PUT: /flights with object : flights, travelerNumber, userId
    NOTE: if user terminates the booking process, send travelerNumber = -2 (depends on #)
    */
    MODIFY_FLIGHTS : "/flights",
    
    /* GET: /bookings?confirmationNum=? */
    GET_BOOKINGS_BY_CONFRIM_NUM : "/bookings?confirmationNum=",
    /* POST: /bookings : users (list of travelers), booking, flights (list), payment (status = false) */
    CREATE_BOOKINGS : "/bookings",
    /* DELETE: /bookings/{bookingId}  <- bookingId */
    DELETE_BOOKING_BY_ID : "/bookings/",
   
    // employee's path
    /*  
    GET: /employees/{employeeID} 
    PUT: /employees/{employeeID} with object : user
    */
    AGENTS_PATH : "/agents",
    COUNTERS_PATH : "/counters",

    /* GET: /employees/bookings */
    EMPLOYEE_DETAILS : "/bookings" ,
    
    //// see above
    // LIST_AIRPORTS_BY_NAME
    // MODIFY_FLIGHTS
    // GET_BOOKINGS_BY_CONFRIM_NUM = "/bookings?confirmationNum=";
    // CREATE_BOOKINGS = "/bookings";
    // DELETE_BOOKING_BY_ID = "/bookings/";

  
}
