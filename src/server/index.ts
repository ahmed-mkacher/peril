import amqp from "amqplib";

async function main() {
  console.log("Starting Peril server...");

  const mq_address = "amqp://guest:guest@localhost:5672/";
  const mq_conn = await amqp.connect(mq_address);

  if (mq_conn) console.log("Connected Successfully!");

  process.on("SIGINT", () => {
    console.log("Closing connection now");
    mq_conn.close();
  })
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
