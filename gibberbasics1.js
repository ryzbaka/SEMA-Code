//Oscillator Basics
a=Sine()
a.disconnect()
b=Sine()
b._
//Oscillator Properties
c=Sine()
c.frequency=60
c.amp=.1
c._
d=Sine(40,.2)//freq and amp

//synth
d=Synth()
d.note('c4')
d.note('eb4')

d.attack=ms(1)//one millisecond attack time
d.decay=1/2 //half note decay time
d.note('g#4')

//synth notes sequence
d.play(['c2','c5','c4'],1/2)//play note sequence but

//only quarter of each note
d.play(['c2','c5','c4','c3','c1',"a#"],[1/4,1/4,1/4,1/4,1/4,1/4])
//adding .random to notes sequence randomizes them
d.play(['c2','c5','c4','c3','c1',"a#"].random(),[1/4,1/4,1/4,1/4,1/4,1/4])
d.decay=1/3
d.attack=ms(1)
a=Square()
a.frequency=2
b=Saw()
b.frequency=4

//FX
d.fx.add(Chorus())//adding chorus fx
d.fx.remove()//remove the last added FX

