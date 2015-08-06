initSidebarItems({"constant":[["EPOLLERR","Error condition happened on the associated file descriptor. epoll_wait(2) will always wait for this event; it is not necessary to set it in events."],["EPOLLET","Sets the Edge Triggered behavior for the associated file descriptor. The default behavior for epoll is Level Triggered."],["EPOLLHUP","Hang up happened on the associated file descriptor. epoll_wait(2) will always wait for this event; it is not necessary to set it in events."],["EPOLLIN","The associated file is available for read(2) operations."],["EPOLLONESHOT","Sets the one-shot behavior for the associated file descriptor. This means that after an event is pulled out with epoll_wait(2) the associated file descriptor is internally disabled and no other events will be reported by the epoll interface. The user must call epoll_ctl() with EPOLL_CTL_MOD to rearm the file descriptor with a new event mask."],["EPOLLOUT","The associated file is available for write(2) operations."],["EPOLLPRI","There is urgent data available for read(2) operations."],["EPOLLRDHUP","Stream socket peer closed connection, or shut down writing half of connection."]]});