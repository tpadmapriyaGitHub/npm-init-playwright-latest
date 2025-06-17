package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class BasicSimulation extends Simulation {
  val httpProtocol = http
    .baseUrl("https://jsonplaceholder.typicode.com") // public API
    .disableCaching  // Optional: force fresh responses

  val scn = scenario("Basic GET")
    .exec(
      http("Get Posts")
        .get("/posts")
        .check(status.in(200, 304))  // Accept both success and not-modified
    )

  setUp(
    scn.inject(atOnceUsers(100))
  ).protocols(httpProtocol)
}
