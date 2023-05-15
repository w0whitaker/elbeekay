# Layouts

This folder includes all the layout templates for the site.

## Hierarchy

Top-to-bottom

1. base
2. page
3. article

```mermaid
flowchart LR
    A[Base] --> | &ltbody&gt | B[Page]
    B --> | &ltmain&gt | C[Article]
    B --> | &ltmain&gt | C1[Form]
    C --> D1[Prose]
    C --> D2[Project]
```