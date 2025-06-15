## Notes:-

```
-> In this directory we learn about props and configuring Tailwind
-> How can we pass props in component
-> using tailwind for styling
```

### Tailwindcss

```
-> A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
```

## What Are props in React?

-> Props stands for “properties”.

- They are used to pass data from one component to another, usually from a parent to a child component.

- Think of props as the arguments you pass to a function, but for components.

## Why Do We Use Props?

-> React is built around components — reusable blocks of UI.
But for a component to be truly reusable, it needs to accept dynamic data — and that’s where props come in.

## Real-Life Analogy

-> Imagine you are making a custom T-shirt component.

You can give it props like:

- color = "red"
- size = "L"
- text = "Hello!"

## Example:

1. Parent Component

```
function App() {
return (
<Greeting name="Asad" />
  );
}
```

2. Child Component

```
function Greeting(props) {
return <h1>Hello, {props.name}!</h1>;
}
```

### Output:

```
Hello, Asad!
```

### How it Works

- App sends the name="Asad" as a prop to the Greeting component.

- Inside Greeting, we access it using props.name.
