//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.

import processing.core.PApplet;
import processing.core.PImage;

public class Main extends PApplet {
    public static PApplet app;
    PImage zero;
    PImage one;
    PImage two;
    PImage three;
    PImage four;
    PImage five;
    PImage six;
    PImage seven;
    PImage eight;
    PImage nine;
    PImage ten;
    PImage eleven;

    public Main() {
        super(); //always first line of a constructor
        app = this;
    }

    public static void main(String[] args) {
        PApplet.main("Main");
    }

    public void settings() {
        size(435, 435);
    }

    public void setup() {
        zero = loadImage("data copy/0.png");
        one = loadImage("data copy/1.png");
        two = loadImage("data copy/2.png");
        three = loadImage("data copy/3.png");
        four = loadImage("data copy/4.png");
        five = loadImage("data copy/5.png");
        six = loadImage("data copy/6.png");
        seven = loadImage("data copy/7.png");
        eight = loadImage("data copy/8.png");
        nine = loadImage("data copy/9.png");
        ten = loadImage("data copy/10.png");
        eleven = loadImage("data copy/11.png");

        background(238, 139, 136);
        textSize(32);
        for (int i = 0; i < 16; i++) {
            tiles[i] = 0;
        }
        for (int j = 0; j < 1; j++) {
            int pos = (int) random(0, 16);
            int val = (int) random(0, 10);
            while (tiles[pos] != 0) {
                pos = (int) random(0, 16);
            }
            if (val < 9) {
                tiles[pos] = 2;
            } else {
                tiles[pos] = 4;
            }
        }
    }

    int[] tiles = new int[16];

    public void draw() {
        for (int i = 0; i < 16; i++) {
            stroke(187, 173, 160);
            if (tiles[i] == 0) {
                image(zero, (i % 4) * 107 + 7, (int) i / 4 * 107 + 7, 100, 100);
            } else if (tiles[i] == 2) {
                image(one, (i % 4) * 107 + 7, (int) i / 4 * 107 + 7, 100, 100);
            } else if (tiles[i] == 4) {
                image(two, (i % 4) * 107 + 7, (int) i / 4 * 107 + 7, 100, 100);
            } else if (tiles[i] == 8) {
                image(three, (i % 4) * 107 + 7, (int) i / 4 * 107 + 7, 100, 100);
            } else if (tiles[i] == 16) {
                image(four, (i % 4) * 107 + 7, (int) i / 4 * 107 + 7, 100, 100);
            } else if (tiles[i] == 32) {
                image(five, (i % 4) * 107 + 7, (int) i / 4 * 107 + 7, 100, 100);
            } else if (tiles[i] == 64) {
                image(six, (i % 4) * 107 + 7, (int) i / 4 * 107 + 7, 100, 100);
            } else if (tiles[i] == 128) {
                image(seven, (i % 4) * 107 + 7, (int) i / 4 * 107 + 7, 100, 100);
            } else if (tiles[i] == 256) {
                image(eight, (i % 4) * 107 + 7, (int) i / 4 * 107 + 7, 100, 100);
            } else if (tiles[i] == 512) {
                image(nine, (i % 4) * 107 + 7, (int) i / 4 * 107 + 7, 100, 100);
            } else if (tiles[i] == 1024) {
                image(ten, (i % 4) * 107 + 7, (int) i / 4 * 107 + 7, 100, 100);
            } else if (tiles[i] == 2048) {
                image(eleven, (i % 4) * 107 + 7, (int) i / 4 * 107 + 7, 100, 100);
            }
            //rect((i % 4) * 107 + 7, (int) i / 4 * 107 + 7, 100, 100);
            if (tiles[i] != 0) {
                fill(0);
            }
            // text(tiles[i],(i%4)*107+50,(int)i/4*107+70);
        }
    }

    public void keyPressed() {
        String dir = "";
        if (keyCode == 87 || keyCode == UP) { // A or UP
            dir = "UP";
        } else if (keyCode == 83 || keyCode == DOWN) { // S or DOWN
            dir = "DOWN";
        } else if (keyCode == 65 || keyCode == LEFT) { // A or LEFT
            dir = "LEFT";
        } else if (keyCode == 68 || keyCode == RIGHT) { // A or UP
            dir = "RIGHT";
        }
        print(dir + "\n");
        boolean moved = true;
        if (dir == "UP") {
            for (int i = 4; i < 16; i++) {
                if (tiles[i] != 0) {
                    int j = i;
                    try {
                        while (j >= 0) {
                            if (tiles[j - 4] == 0) {
                                tiles[j - 4] = tiles[j];
                                tiles[j] = 0;
                                draw();
                                moved = true;
                                j -= 4;
                            } else if (tiles[j - 4] == tiles[j]) {
                                tiles[j - 4] *= 2;
                                tiles[j] = 0;
                                draw();
                                moved = true;
                                break;
                            } else {
                                break;
                            }
                        }
                    } catch (Exception e) {
                        ;
                    }
                }
            }
        }
        if (dir == "DOWN") {
            for (int i = 12; i >= 0; i--) {
                if (tiles[i] != 0) {
                    int j = i;
                    try {
                        while (j >= 0) {
                            if (tiles[j + 4] == 0) {
                                tiles[j + 4] = tiles[j];
                                tiles[j] = 0;
                                draw();
                                moved = true;
                                j += 4;
                            } else if (tiles[j + 4] == tiles[j]) {
                                tiles[j + 4] *= 2;
                                tiles[j] = 0;
                                draw();
                                moved = true;
                                break;
                            } else {
                                break;
                            }
                        }
                    } catch (Exception e) {
                        ;
                    }
                }
            }
        }
        if (dir.equals("LEFT")) {
            for (int j = 1; j < 4; j++) {
                for (int k = 0; k < 4; k++) {
                    int i = j + k * 4;
                    if (tiles[i] != 0) {
                        int l = i;
                        try {
                            while (l % 4 >= 0) {
                                if (tiles[l - 1] == 0 && l % 4 > 0) {
                                    tiles[l - 1] = tiles[l];
                                    tiles[l] = 0;
                                    draw();
                                    moved = true;
                                    l -= 1;
                                } else if (tiles[l - 1] == tiles[l]) {
                                    tiles[l - 1] *= 2;
                                    tiles[l] = 0;
                                    draw();
                                    moved = true;
                                    break;
                                } else {
                                    break;
                                }
                            }
                        } catch (Exception e) {
                            ;
                        }
                    }
                }
            }
        }
        if (dir.equals("RIGHT")) {
            for (int j = 2; j >= 0; j--) {
                for (int k = 3; k >= 0; k--) {
                    int i = j + k * 4;
                    if (tiles[i] != 0) {
                        int l = i;
                        try {
                            while (l % 4 <= 3) {
                                if (tiles[l + 1] == 0 && l % 4 < 3) {
                                    tiles[l + 1] = tiles[l];
                                    tiles[l] = 0;
                                    draw();
                                    moved = true;
                                    l += 1;
                                } else if (tiles[l + 1] == tiles[l]) {
                                    tiles[l + 1] *= 2;
                                    tiles[l] = 0;
                                    draw();
                                    moved = true;
                                    break;
                                } else {
                                    break;
                                }
                            }
                        } catch (Exception e) {
                            ;
                        }
                    }
                }
            }
        }

        if ((dir.equals("LEFT") || dir.equals("RIGHT") || dir.equals("UP") || dir.equals("DOWN")) && moved) {
            int newTile = (int) random(0, 16);
            while (tiles[newTile] != 0) {
                newTile = (int) random(0, 15);
            }
            int val = (int) random(0, 10);
            if (val < 9) {
                tiles[newTile] = 2;
            } else {
                tiles[newTile] = 4;
            }
        }
        draw();
    }
}
