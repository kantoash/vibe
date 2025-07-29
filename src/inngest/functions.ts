import { inngest } from './client'

export const helloWorld = inngest.createFunction(
    { id: "hello-world" },
    { event: 'test/hello.world' },
    async ({ event, step }) => {
        await step.sleep("waiting for 1 second", "1s" );
        return {
            message: `Hello ${event.data.email}`
        }
    }
)