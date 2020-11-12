FROM gitpod/workspace-full:latest

RUN sudo apt-get update \
    && sudo apt-get install -y \
        tool \
    && sudo rm -rf /var/lib/apt/lists*

RUN bash -c ". .nvm/nvm.sh \
    "&& nvm install 8 \
    && nvm use 8 \
    && nvm alias default 8"

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix 

RUN npm i -g bash-language-server

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/
