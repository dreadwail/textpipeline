## Material UI Notes

The APIs for Material-UI can be kind of confusing so this is a reference to make things plain.

## makeStyles vs createStyles vs withStyles ?

- `createStyles` exists purely to satisfy Typescript for the input styles to `makeStyles` and `withStyles`.

- `makeStyles` creates a hook that provides a set of classes based on a set of provided dictionary of `className` to CSS.

- `withStyles` is the same as `makeStyles` except that its plugged in as a HoC.
