# All about contexts

A valid context is a crucial part of an RO Crate file and this property of the profile allows you to
provide one for the classes and properties defined in the profile.

From the
[section on contexts in the JSON-LD specification](https://www.w3.org/TR/json-ld11/#the-context):

> When two people communicate with one another, the conversation takes place in a shared
> environment, typically called "the context of the conversation". This shared context allows the
> individuals to use shortcut terms, like the first name of a mutual friend, to communicate more
> quickly but without losing accuracy. A context in JSON-LD works in the same way. It allows two
> applications to use shortcut terms to communicate with one another more efficiently, but without
> losing accuracy.

Following is a stripped down example of the structure of an RO-Crate file with the RO Crate context:

```
{
    @context: "https://w3id.org/ro/crate/1.1/context",
    @graph: [
        ...
    ]
}
```

In this instance the context is a string. But it can be an object or array of things as in the
following examples:

-   An array with the RO Crate context.

```
{
    @context: [
        "https://w3id.org/ro/crate/1.1/context"
    ],
    @graph: [
        ...
    ]
}
```

An array with the RO Crate context and Friend of a Friend (FOAF) and Dublin Core Terms. In this
example we are adding in the additional ontologies and namespacing them. We'll see how to use this
further on.

```
{
    @context: [
        "https://w3id.org/ro/crate/1.1/context",
        { "foaf": "http://xmlns.com/foaf/0.1/#term_family_name" },
        { "dcterms": "https://www.dublincore.org/specifications/dublin-core/dcmi-terms/" }
    ],
    @graph: [
        ...
    ]
}
```

-   As above but with some custom definitions as well:

```
{
    @context: [
        "https://w3id.org/ro/crate/1.1/context",
        { "foaf": "http://xmlns.com/foaf/0.1/#term_family_name" },
        { "dcterms": "https://www.dublincore.org/specifications/dublin-core/dcmi-terms/" }
        {
            somePropertyInYourDomain: "https://your domain/path/to/definition#somePropertyInYourDomain"
        }
    ],
    @graph: [
        ...
    ]
}
```

Now, when you create a Describo profile, you can use the array form to store your custom context in
the profile itself. Then, in your input definitions you can do:

-   Using FOAF and DC Terms (abbreviated for clarity)

```
{
    ...,
    classes: {
        Dataset: {
            ...,
            inputs: [
                {
                    id: `http://xmlns.com/foaf/0.1/#term_family_name`,
                    name: 'foaf:family_name',
                    ...
                },
                {
                    id: `https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/abstract`,
                    name: 'dcterms:abstract'
                }
            ]
        }
    }
}
```

Then, when Describo emits the user created crate, it will come with a context that describes the
data accurately because all of the things the user can do with your profile, match the context you
provide.
