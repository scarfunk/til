// Bracket Notation
"Test String1"[6]

// Real Implementation
"Test String1".charAt(6)
It is a bad idea to use brackets, for these reasons (Source):

This notation does not work in IE7. The first code snippet will return undefined in IE7. If you happen to use the bracket notation for strings all over your code and you want to migrate to .charAt(pos), this is a real pain: Brackets are used all over your code and there's no easy way to detect if that's for a string or an array/object.

You can't set the character using this notation. As there is no warning of any kind, this is really confusing and frustrating. If you were using the  .charAt(pos) function, you would not have been tempted to do it.
Basically, it's a shortcut notation that is not fully implemented across all browsers.

Note, you are not able to write characters using either method. However, that functionality is a bit easier to understand with the .charAt() function which, in most languages, is a read-only function.
