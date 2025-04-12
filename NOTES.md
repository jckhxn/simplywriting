# UI sections to do

testimonials
contact
footer

# Fixes, Additions
Footer needs to display links, company, etc properly
Fix Resend (If localhost isnt problem)

Rebuid direct linking to components
Sanity passes \_type = name of component
Each component has a unique name set in schema and is surfaced by a custom input component in the CTA button schema.
A button can link to a component by it's schema name, e.g "section.hero"
Button's "section" properly has name of linked to component "/#section.hero" and the id field of linked component has the name of the component.
(Components must have unique names set in schema and cannot overlap thus preventing any errors that may occur)
