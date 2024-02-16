let pkgs = import <nixpkgs> {};
in pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs
    pkgs.mariadb
    pkgs.git
  ];
  shellHook = ''
    echo "Were in the shell";
    export HOST="localhost";
    export USER="root";
    export PASSWORD="$(cat ~/.config/token)";
    export DATABASE="my_db";
  '';
}
