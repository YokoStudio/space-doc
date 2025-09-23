---
sidebar_position: 1
---

# Tutorial Intro

A modern React component library with space-themed UI components built with TypeScript and Tailwind CSS.

Installation
------------

[](https://www.npmjs.com/package/@yokostudio/space-react#installation)

```source-shell
npm install @yokostudio/space-react
# or
yarn add @yokostudio/space-react
# or
pnpm add @yokostudio/space-react
```

### Peer Dependencies

[](https://www.npmjs.com/package/@yokostudio/space-react#peer-dependencies)

This library requires the following peer dependencies to be installed in your project:

```source-shell
npm install react react-dom @headlessui/react @floating-ui/react framer-motion
# or
yarn add react react-dom @headlessui/react @floating-ui/react framer-motion
# or
pnpm add react react-dom @headlessui/react @floating-ui/react framer-motion
```

Required peer dependencies:

-   `react` >= 17.0.0
-   `react-dom` >= 17.0.0
-   `@headlessui/react` ^2.0.0
-   `@floating-ui/react` ^0.27.0
-   `framer-motion` ^12.0.0

Usage
-----

[](https://www.npmjs.com/package/@yokostudio/space-react#usage)

### Basic Setup

[](https://www.npmjs.com/package/@yokostudio/space-react#basic-setup)

```source-tsx
import React from 'react';
import { Button, Input, Badge } from '@yokostudio/space-react';
import '@yokostudio/space-react/style';

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Input placeholder="Enter text..." />
      <Badge variant="primary">New</Badge>
    </div>
  );
}
```

### Individual Component Imports

[](https://www.npmjs.com/package/@yokostudio/space-react#individual-component-imports)

```source-tsx
import { Button } from '@yokostudio/space-react';
import '@yokostudio/space-react/style';
```

Components
----------

[](https://www.npmjs.com/package/@yokostudio/space-react#components)

-   Badge - Status indicators and labels
-   Button - Interactive buttons with various styles
-   Input - Text input fields
-   Textarea - Multi-line text input
-   Checkbox - Checkbox inputs
-   RadioGroup - Radio button groups
-   Switch - Toggle switches
-   Slider - Range sliders
-   Dropdown - Dropdown menus
-   Field - Form field wrapper
-   Tab - Tab navigation
-   Divider - Visual separators
-   Tooltip - Contextual tooltips

Requirements
------------

[](https://www.npmjs.com/package/@yokostudio/space-react#requirements)

-   React >= 17.0.0
-   React DOM >= 17.0.0
-   @headlessui/react ^2.0.0
-   @floating-ui/react ^0.27.0
-   framer-motion ^12.0.0
-   TypeScript (for type definitions)

Styling
-------

[](https://www.npmjs.com/package/@yokostudio/space-react#styling)

This library uses Tailwind CSS for styling. Make sure you have Tailwind CSS configured in your project, or import the styles:

```source-tsx
import '@yokostudio/space-react/style';
```

TypeScript Support
------------------

[](https://www.npmjs.com/package/@yokostudio/space-react#typescript-support)

This library is built with TypeScript and includes full type definitions.

License
-------

[](https://www.npmjs.com/package/@yokostudio/space-react#license)

MIT

Contributing
------------

[](https://www.npmjs.com/package/@yokostudio/space-react#contributing)

Contributions are welcome! Please read our contributing guidelines.

Changelog
---------

[](https://www.npmjs.com/package/@yokostudio/space-react#changelog)

See [CHANGELOG.md](https://github.com/yokostudio/space-react/blob/HEAD/CHANGELOG.md) for a list of changes.

Readme
------