
Command
= cmd:Cmd _ "," _ type:Type _ "," args:Argument{
	return {
		cmd: cmd,
        type:type,
        args:args
	}
}

Cmd 
= cmd:Word {
	return cmd
}
Type 
= type:Word 
Word
= word:[a-zA-Z0-9\.\$\* ]+ {
	return word.join("").toLowerCase().trim()
}

Argument
=  wrd:Word _ "," _  args:Argument {
	return [wrd,args]
}

/ wrd:Word 

_ "whitespace"
  = [ \t\n\r]*