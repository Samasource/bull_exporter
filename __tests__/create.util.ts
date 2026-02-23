import Bull = require("bull");
import { Registry } from "prom-client";

import { makeGuages, QueueGauges } from "../src/queueGauges";

export interface TestData {
	name: string;
	queue: Bull.Queue;
	prefix: string;
	guages: QueueGauges;
	registry: Registry;
}

export function makeQueue(
	name: string = "TestQueue",
	prefix: string = "test-queue"
): TestData {
	const registry = new Registry();
	const redisUrl = process.env.REDIS_URL || "redis://127.0.0.1:6379";
	const queue = new Bull(name, redisUrl, { prefix });

	return {
		name,
		queue,
		prefix,
		registry,
		guages: makeGuages("test_stat_", [registry]),
	};
}
