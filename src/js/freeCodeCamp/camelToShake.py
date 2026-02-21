import re


def to_snake(camel):
    def repl(match):
        return "_" + match.group(0).lower()

    return re.sub("[A-Z]", repl, camel)
