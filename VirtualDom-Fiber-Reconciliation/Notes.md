# Github repo for this directory as a learning source

[react-fiber-architecture](https://github.com/acdlite/react-fiber-architecture)

## Notes:-

```
-> In this directory we learn about what does "createRoot" method do
    - "createRoot"(document.getElementById('root')).render
-> Additionaly VirtualDom, Fibre, Reconciliation
```

## What is React Fiber?

-> React Fiber is a complete rewrite of React's core algorithm — the part that decides how and when your UI updates.

-> It’s designed to make React better at animations, gestures, layouts, and scheduling work in a smarter way.

-> The key idea is to break rendering into smaller chunks that React can pause, stop, or prioritize based on what's happening in the app.

## Why was Fiber created?

-> Because the old React algorithm:

- Did all updates in one big go (synchronously),

- Could not pause or stop in the middle of rendering,

- Was not good for handling animations or big updates smoothly.

## Key Features of React Fiber:

1.  Incremental Rendering
    → React can now break its work into smaller steps and do them over time, not all at once.

2.  Prioritization
    → Some updates (like a button click) are more important than others (like background data load). Fiber lets React decide which update should be done first.

3.  Pausing and Reusing Work
    → React can stop in the middle of rendering, remember what it was doing, and come back to it later — saving time and performance.

4.  Concurrency Support
    → Fiber helps React work more like a multitasking system: doing some work now, some later, and skipping unnecessary work if needed.

## What is Reconciliation?

-> It’s how React figures out what changed in your UI and what needs to be updated in the DOM.

-> React compares the old virtual tree with the new one, and calculates the minimal set of changes.

(Fiber improves this process by making it interruptible, faster, and more flexible).

## What is a Fiber?

-> A fiber is a unit of work — like a task that React needs to do.

    - More simply :-

    Think of each React component as a function, and Fiber lets React break those functions into pieces so it can do the work little by little.

    - In tech terms:

    A fiber is like a virtual stack frame — something React can keep in memory, pause, resume, or cancel.

## Stack vs Fiber:

-> Normally, JavaScript uses the call stack — it finishes one function before moving to the next.

-> Fiber replaces this behavior. Now React can say: - “I’ll do part of this work now, take a break, and come back later.”

(This is huge for performance and responsiveness in UI.)

## Scheduling in React Fiber:

-> Scheduling is about deciding when to do updates.

    - Example: If the user is clicking fast, we want UI updates (like button animations) to happen first, not slow background tasks.

-> React uses this idea to:

    - Delay low-priority updates
    - Batch similar updates together
    - Avoid dropping animation frames

(Fiber is the engine that lets React control when and what to update, making apps feel smoother.)

## Summary in One Line:

-> React Fiber is a smarter engine inside React that lets it do UI updates in smaller, controllable steps, with better performance and support for animations, priorities, and multitasking.

## Why Should You Care (as a Developer)?

-> Even though you don’t directly use Fiber,

- It makes your app faster and more responsive
- Enables new features like useTransition, Suspense, and concurrent rendering
- It's the foundation for modern React behavior
